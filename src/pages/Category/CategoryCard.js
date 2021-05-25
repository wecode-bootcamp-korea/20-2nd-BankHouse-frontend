import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { flexSet } from '../../styles/Variable';

function CategoryCard({ history, cardData }) {
  const goToProduct = id => {
    history.push(`/product/${id}`);
  };

  return (
    <Contents>
      {cardData.map(card => {
        return (
          <WrapCardItem key={card.post_id}>
            <CardItem onClick={() => goToProduct(card.post_id)}>
              <CardHeader>
                <ProfileImg
                  alt="profile-img"
                  src={card.user_image ? card.user_image : '/images/user.png'}
                />
                <ProfileName>{card.user_nickname}</ProfileName>•
                <Follow onClick={() => alert('팔로우 되었습니다!')}>
                  팔로우
                </Follow>
              </CardHeader>
              <CardContent>
                <CardImg alt="BankHouse" src={card.post_image} />
                <Views>
                  조회수 <span>{card.hit}</span>
                </Views>
              </CardContent>
              <CardItemActionList>
                <CardAction>
                  <CardItemAction>
                    <ActionImg alt="좋아요" src="/images/heart.png" />
                  </CardItemAction>
                  <Count>{card.like_count}</Count>
                </CardAction>
                <CardAction>
                  <CardItemActionAnchor>
                    <ActionImg alt="댓글" src="/images/bubble.png" />
                  </CardItemActionAnchor>
                  <Count>1</Count>
                </CardAction>
              </CardItemActionList>
              <Review>{card.description}</Review>
              {card.recently_comment && (
                <Comment>
                  <UserImg
                    alt="user-img"
                    src={
                      card.recently_comment_image
                        ? card.recently_comment_image
                        : '/images/user.png'
                    }
                  />
                  <div>
                    <UserName>{card.recently_comment_nickname}</UserName>
                    <CommentText>{card.recently_comment}</CommentText>
                  </div>
                </Comment>
              )}
            </CardItem>
          </WrapCardItem>
        );
      })}
    </Contents>
  );
}

const Contents = styled.div`
  ${flexSet('center', 'flax-start')}
  flex-wrap: wrap;
  width: 1250px;
  margin: auto;
`;

const WrapCardItem = styled.article`
  margin-top: 30px;
  padding: 15px;
  -webkit-font-smoothing: antialiased;
  letter-spacing: -0.4px;
`;

const CardItem = styled.div`
  width: 265px;
  padding-bottom: 40px;
`;

const CardHeader = styled.div`
  ${flexSet('flex-start', 'center')}
  margin-bottom: 16px;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const ProfileName = styled.span`
  padding-left: 10px;
  color: ${({ theme }) => theme.fontMainBlack};
  font-size: 18px;
  font-weight: 500;
`;

const Follow = styled.div`
  color: ${({ theme }) => theme.mainBlue};
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;

const CardContent = styled.div`
  width: 265px;
  height: 265px;
  overflow: hidden;
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  object-fit: cover;

  &:hover {
    transition: 0.5s;
    transform: scale(1.1);
  }
`;

const Views = styled.p`
  position: relative;
  right: 10px;
  bottom: 30px;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  text-align: right;
`;

const CardItemActionList = styled.aside`
  ${flexSet('space-around', 'center')}
  display: flex;
  justify-content: space-around;
`;

const CardAction = styled.div`
  ${flexSet('start', 'center')}
  padding: 13px 0 16px;
`;

const CardItemAction = styled.button`
  font-size: 26px;
`;

const ActionImg = styled.img`
  margin: 0 5px;
  width: 28px;
`;

const Count = styled.span`
  font-size: 12px;
  vertical-align: baseline;
`;

const CardItemActionAnchor = styled.a`
  padding: 0 6px;
  font-size: 26px;
`;

const Review = styled.p`
  display: -webkit-box;
  color: ${({ theme }) => theme.fontSubNavBlack};
  font-size: 18px;
  text-align: justify;
  line-height: 1.2;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  &:hover {
    opacity: 0.6;
  }
`;

const Comment = styled.div`
  ${flexSet('flex-start', 'center')}
  margin-top: 12px;

  &:hover {
    opacity: 0.6;
  }
`;

const UserImg = styled(ProfileImg.withComponent('img'))`
  width: 28px;
  height: 28px;
  margin: 0 10px 16px 0;
`;

const UserName = styled.span`
  display: inline;
  margin-right: 5px;
  color: ${({ theme }) => theme.fontMainBlack};
  font-size: 17px;
  font-weight: 700;
`;

const CommentText = styled.p`
  display: inline;
  color: ${({ theme }) => theme.fontMainBlack};
  font-size: 17px;
  line-height: 1.4;
`;

export default withRouter(CategoryCard);
