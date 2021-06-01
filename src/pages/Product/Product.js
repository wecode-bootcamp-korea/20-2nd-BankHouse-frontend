import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { flexSet } from '../../styles/Variable';

function Product({ theme }) {
  const [inputValue, setInputValue] = useState('');
  const [commentList, setCommentList] = useState([]);
  const [opacity, setOpacity] = useState(true);
  const [productList, setProductList] = useState({});

  useEffect(() => {
    //comment API
    fetch('/data/comment.json')
      // fetch('http://webankhouse.com')
      .then(res => res.json())
      .then(res => setCommentList(res.data.comment));

    //product API
    fetch('/data/productData.json')
      .then(res => res.json())
      .then(res => setProductList(res.data.product));
  }, []);

  const onChangeCommentInput = e => {
    setInputValue(e.target.value);
    setOpacity(!e.target.value);
  };

  const onSubmitComment = e => {
    e.preventDefault();
    //TODO: 백엔드 API 완성 후 구체화 예정
    // fetch(API, {
    // method: 'POST',
    //   headers: {
    //     Authorization: localStorage.getItem('accessToken'),
    //   },
    //  body: JSON.stringify({
    //   }),
    // })
    // .then(res => res.json())
    // .then(data => )
  };

  const onClickCommentHeart = () => {
    //TODO: 백엔드 API 완성 후 구체화 예정
    // fetch(API, {
    // method: 'POST',
    //   headers: {
    //     Authorization: localStorage.getItem('accessToken'),
    //   },
    //  body: JSON.stringify({
    // })
    // .then(res => res.json())
    // .then(data => )
  };

  const onClickURL = e => {
    navigator.clipboard.writeText(window.location.href);
    alert('클립보드에 복사되었습니다.');
  };

  const timeForToday = postedTime => {
    const today = new Date();
    const timeValue = new Date(postedTime);

    const betweenTime = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60
    );
    if (betweenTime < 1) return '방금전';
    if (betweenTime < 60) {
      return `${betweenTime}분전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    const betweenTimeMonth = Math.floor(betweenTime / 60 / 24 / 30);

    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
    }
    if (betweenTimeDay < 31) {
      return `${betweenTimeDay}일전`;
    }
    if (betweenTimeMonth < 12) {
      return `${betweenTimeMonth}달전`;
    }
    return `${Math.floor(betweenTimeDay / 365)}년전`;
  };

  // json date 값을 "2021-05-23T23:19:20+0000" 형식으로 변경
  const postedDate = date => {
    const timeSplit = date.slice(0, 19).split(' ');
    const posted = new Date(`${timeSplit[0]}T${timeSplit[1]}+0000`);
    return timeForToday(posted.getTime());
  };

  return (
    <Wrapper>
      <Article>
        <div>
          <ProductHeader>
            <div>{productList.size}</div>
            <div>{postedDate(`${productList.posted_time}`)}</div>
          </ProductHeader>
          <ProductImgContainer>
            <ProductImg src={productList.imgURL} alt="product" />
          </ProductImgContainer>
        </div>
        <div>
          <CommentCount>
            댓글 <CommentCountNum>{commentList.length}</CommentCountNum>
          </CommentCount>
          <InputContainer>
            <FaSmile className="fas fa-smile"></FaSmile>
            <form onSubmit={onSubmitComment}>
              <CommentInput
                type="text"
                name="comment"
                placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 :)"
                value={inputValue}
                onChange={onChangeCommentInput}
              />
              <Register alert={opacity}>등록</Register>
            </form>
          </InputContainer>
          {commentList.map(({ id, img_url, user, content, date, like }) => {
            return (
              <Comment key={id}>
                <Circle alt="user face" src={img_url} />
                <CommentFeed>
                  <UserAndContent>
                    <User>{user}</User>
                    <div>{content}</div>
                  </UserAndContent>
                  <CommentInfo>
                    <Time>{postedDate(date)}</Time>
                    <CommentHeart onClick={onClickCommentHeart}>
                      <FaHeart className="far fa-heart"></FaHeart>
                      <span>{like}</span>
                    </CommentHeart>
                  </CommentInfo>
                </CommentFeed>
              </Comment>
            );
          })}
        </div>
      </Article>
      <Aside>
        <div>
          <LikeButton>
            <FaHeart className="far fa-heart"></FaHeart>
            {productList.liked}
          </LikeButton>
          <Profile>
            <UserInfo>
              <Circle
                alt="user face"
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              />
              <Name>{productList.liked_nickname}</Name>
            </UserInfo>
            <Follow>팔로우</Follow>
          </Profile>
        </div>
        <Circle as="div" onClick={onClickURL}>
          URL
        </Circle>
      </Aside>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  max-width: 1200px;
  padding: 0 50px;
  margin: 0 auto;
`;

const Article = styled.div`
  padding: 20px;
  border-right: 1px solid ${props => props.theme.borderLine};
`;

const ProductHeader = styled.div`
  ${flexSet('space-between')}
  padding: 50px 0;
  color: ${({ theme }) => theme.fontGray};
`;

const ProductImgContainer = styled.div`
  max-width: 800px;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    margin: 30px 0;
    background-color: ${props => props.theme.borderLine};
  }
`;

const ProductImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

const CommentCount = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const CommentCountNum = styled.span`
  color: ${props => props.theme.mainBlue};
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
`;

const FaSmile = styled.div`
  font-size: 1.4rem;
  color: grey;
  margin-right: 10px;
`;

const CommentInput = styled.input`
  position: absolute;
  top: -10px;
  padding: 10px;
  width: 95%;
  border: 1px solid ${props => props.theme.inputGray};
  border-radius: 5px;
`;

const Register = styled.button`
  position: absolute;
  right: 12px;
  font-weight: 700;
  ${({ theme, alert }) => css`
    color: ${theme.mainBlue};
    opacity: ${alert ? 0.6 : 1};
  `}
`;

const Comment = styled.div`
  ${flexSet('start', 'center')}
  margin-top: 30px;
`;

const Circle = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  ${({ as, theme }) =>
    as === 'div' &&
    css`
      line-height: 48px;
      text-align: center;
      color: #fff;
      cursor: pointer;
      background-color: ${theme.mainBlue};
    `}
`;

const CommentFeed = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserAndContent = styled.div`
  display: flex;
  color: ${props => props.theme.fontMainBlack};
`;

const User = styled.div`
  font-weight: bold;
  margin-right: 20px;
`;

const CommentInfo = styled.div`
  position: relative;
  top: 10px;
  display: flex;
  color: ${props => props.theme.fontMainBlack};
`;

const Time = styled.div`
  margin-right: 20px;
`;

const Aside = styled.div`
  position: sticky;
  top: 0;
  ${flexSet('space-between', 'center')}
  flex-direction: column;
  flex: 1 1 380px;
  padding: 70px 20px;
  height: 830px;
`;

const CommentHeart = styled.div`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const FaHeart = styled.div`
  position: relative;
  top: 1px;
  margin-right: 5px;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${props => props.theme.fontMainBlack};
`;

const LikeButton = styled.button`
  width: 260px;
  height: 50px;
  margin-bottom: 25px;
  line-height: 50px;
  background-color: ${props => props.theme.backgroundGrey};
  border-radius: 10px;
  font-size: 15px;

  &:hover {
    background-color: ${props => props.theme.borderLine};
  }
`;

const Profile = styled.div`
  ${flexSet('space-between', 'center')}
`;

const UserInfo = styled.div`
  ${flexSet('start', 'center')}
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

const Name = styled.div`
  font-weight: bold;
`;

const Follow = styled.button`
  padding: 0 10px;
  height: 35px;
  background-color: ${props => props.theme.backgroundGrey};
  border-radius: 10px;
  color: grey;
  font-weight: bold;

  &:hover {
    background-color: ${props => props.theme.borderLine};
  }
`;

export default withRouter(Product);
