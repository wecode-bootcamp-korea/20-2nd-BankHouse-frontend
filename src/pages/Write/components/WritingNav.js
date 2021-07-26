import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { flexSet } from '../../../styles/Variable';

function WritingNav({ onPost }) {
  const location = useLocation();

  return (
    <>
      <WritingMainNavContainer>
        <WritingMainNavContainerInnerWrapper>
          <GoToMainPageLink to="/">은행의집</GoToMainPageLink>
          <PostingMenuButton>
            <PostingLink onClick={onPost}>올리기</PostingLink>
          </PostingMenuButton>
        </WritingMainNavContainerInnerWrapper>
      </WritingMainNavContainer>
      <WritingBottomNavContainer>
        <WritingBottomNavContainerInnerWrapper>
          <WritingMenuCategories
            to="/write"
            isSelected={location.pathname === '/write'}
          >
            사진
          </WritingMenuCategories>
          <WritingMenuCategories
            to="/video"
            isSelected={location.pathname === '/video'}
          >
            동영상
          </WritingMenuCategories>
        </WritingBottomNavContainerInnerWrapper>
      </WritingBottomNavContainer>
    </>
  );
}

const WritingMainNavContainer = styled.div`
  position: sticky;
  top: 0px;
  right: 0px;
  left: 0px;
  height: 80px;
  background-color: #ffffff;
  border-bottom: 1px solid ${({ theme }) => theme.borderLine};
`;

const WritingMainNavContainerInnerWrapper = styled.div`
  ${flexSet('space-between', 'center')};
  max-width: 1256px;
  height: 80px;
  margin: 0 auto;
  padding: 0px 30px;
`;

const GoToMainPageLink = styled(Link)`
  width: 15%;
  font-family: '잘풀리는오늘';
  font-size: 26px;
  color: inherit;
  text-decoration: none;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const PostingMenuButton = styled.button`
  width: 13%;
  height: 45px;
  padding: 8px 12px;
  background-color: transparent;
  background-color: ${({ theme }) => theme.mainBlue};
  border: 0;
  border-radius: 5px;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const PostingLink = styled(Link)`
  font-weight: 600;
  vertical-align: middle;
  color: #ffffff;
  text-decoration: none;
  font-size: 17px;
`;

const WritingBottomNavContainer = styled.div`
  height: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.borderLine};
  font-size: 18px;
  font-weight: 700;
`;

const WritingBottomNavContainerInnerWrapper = styled.div`
  ${flexSet('start')};
  max-width: 1256px;
  height: 50px;
  margin: 0 auto;
  padding: 0px 30px;
`;

const WritingMenuCategories = styled(Link)`
  margin-right: 30px;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.mainBlue : theme.fontMainBlack};
  font-size: 16px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.mainBlue};
  }
`;

export default WritingNav;
