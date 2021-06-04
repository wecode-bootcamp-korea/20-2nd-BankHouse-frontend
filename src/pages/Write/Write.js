import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components/macro';
import { flexSet } from '../../styles/Variable';
import SelectContainer from './components/SelectContainer';
import WritingNav from '../Write/components/WritingNav';

function Write({ history, theme, props }) {
  const [file, setFile] = useState('');
  const [previewURL, setPreviewURL] = useState('');
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({
    description: '',
    livingtype: '',
    space: '',
    size: '',
    style: '',
  });
  const [isBtnOnceClicked, setIsBtnOnceClicked] = useState(false);
  const fileInput = useRef();

  useEffect(() => {
    fetch('./data/categoryList.json')
      .then(res => res.json())
      .then(res => setCategoryList(res.results));
  }, []);

  const onSelect = (main, sub) => {
    const currentCategory = { ...selectedCategory, [main]: sub };
    setSelectedCategory(currentCategory);
  };

  const onFileInput = e => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.readAsDataURL(file);

    reader.onload = () => {
      setFile(file);
      setPreviewURL(reader.result);
    };
  };

  const onClickDelete = () => {
    fileInput.current.value = null;
    setFile('');
  };

  const onTypeTextarea = e => {
    const currentTextarea = {
      ...selectedCategory,
      description: e.target.value,
    };
    setSelectedCategory(currentTextarea);
  };

  const onPost = () => {
    const isEveryFilled = Object.values(selectedCategory).every(
      inputValue => inputValue
    );
    setIsBtnOnceClicked(true);

    if (isEveryFilled) {
      const selectedInfo = JSON.stringify(selectedCategory);
      const categoryData = new FormData();
      categoryData.append('info', selectedInfo);
      categoryData.append('image', file);

      // fetch('http://10.58.5.18:8000/posts/post', {
      fetch('http://webankhouse.com:8002/posts/post', {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('access_token'),
        },
        body: categoryData,
      })
        .then(res => res.json())
        .then(data => console.log(`data`, data));
      history.push(`/`);
    }
  };

  return (
    <>
      <WritingNav onPost={onPost} />
      <Wrapper>
        <Filter>
          {categoryList
            .filter(list =>
              ['주거형태', '평수', '스타일'].includes(list.menuName)
            )
            .map(menuName => (
              <SelectContainer
                selectedCategory={selectedCategory}
                menuName={menuName}
                top
                onSelect={onSelect}
                key={menuName.id}
                isBtnOnceClicked={isBtnOnceClicked}
              />
            ))}
        </Filter>
        <WriteContainer>
          {file ? (
            <Preview>
              <ProfilePreview src={previewURL} alt="uploaded" ref={fileInput} />
              <i
                className="fas fa-trash-alt"
                ref={fileInput}
                onClick={onClickDelete}
              ></i>
            </Preview>
          ) : (
            <PhotoContainer>
              <UploadInput
                type="file"
                name="photo"
                id="photo"
                accept="image/*"
                onChange={onFileInput}
                required
              />
              <Upload type="submit">
                <i className="fas fa-camera" />
                사진 올리기
                <p>(*1장만)</p>
              </Upload>
            </PhotoContainer>
          )}
          <WriteSection>
            {categoryList
              .filter(list => ['공간'].includes(list.menuName))
              .map(menuName => (
                <SelectContainer
                  selectedCategory={selectedCategory}
                  full
                  menuName={menuName}
                  onSelect={onSelect}
                  key={menuName.id}
                  isBtnOnceClicked={isBtnOnceClicked}
                />
              ))}
            <Info
              placeholder="사진에 대해 설명해주세요."
              onChange={onTypeTextarea}
            />
          </WriteSection>
        </WriteContainer>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  max-width: 943px;
  margin: 0 auto;
`;

const Filter = styled.div`
  ${flexSet('start')}
  margin-top: 50px;
  margin-bottom: 50px;
`;

const WriteContainer = styled.div`
  ${flexSet('center', 'start')};

  @media screen and (max-width: 780px) {
    ${flexSet()};
    flex-direction: column;
    padding: 0 20px;
  }
`;

const PhotoContainer = styled.form`
  position: relative;
  flex: 1 1 auto;

  @media screen and (max-width: 780px) {
    width: 100%;
  }
`;

const UploadInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: transparent;

  &::-webkit-file-upload-button {
    display: none;
  }
`;

const Upload = styled.button`
  flex: 1 1 auto;
  padding: 100px 0px;
  width: 100%;
  height: 100%;
  margin-right: 20px;
  text-align: center;
  color: #a4acb3;
  font-weight: bold;
  cursor: pointer;
  border: none;
  background-color: ${({ theme }) => theme.backgroundGrey} !important;

  //for border dot's wider spacing
  background: linear-gradient(to right, #ccc 50%, rgba(255, 255, 255, 0) 0%),
    linear-gradient(#ccc 50%, rgba(255, 255, 255, 0) 0%),
    linear-gradient(to right, #ccc 50%, rgba(255, 255, 255, 0) 0%),
    linear-gradient(#ccc 50%, rgba(255, 255, 255, 0) 0%);
  background-position: top, right, bottom, left;
  background-repeat: repeat-x, repeat-y;
  background-size: 10px 1px, 1px 10px;

  &:hover {
    opacity: 0.5;
  }

  i {
    display: block;
    font-size: 3rem;
  }

  p {
    font-size: 0.6rem;
  }
`;

const Preview = styled.div`
  position: relative;
  flex-basis: 50%;
  margin-bottom: 10px;

  i {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
  }
`;

const ProfilePreview = styled.img`
  width: 100%;
  height: 100%;
`;

const WriteSection = styled.div`
  ${flexSet()}
  flex-basis: 50%;
  flex-direction: column;
  margin-left: 20px;

  @media screen and (max-width: 780px) {
    margin-left: 0;
    margin-top: 20px;
    width: 100%;
  }
`;

const Info = styled.textarea`
  padding: 15px 25px;
  width: 100%;
  height: 150px;
  border: 1px solid ${({ theme }) => theme.inputGray};
  border-radius: 5px;
  resize: none;

  &:hover {
    background-color: ${({ theme }) => theme.backgroundGrey};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #c2eefb;
    background-color: #fff;
  }

  &::placeholder {
    color: ${({ theme }) => theme.placeholderGrey};
  }
`;

const Post = styled.div`
  cursor: pointer;
`;

export default withRouter(Write);
