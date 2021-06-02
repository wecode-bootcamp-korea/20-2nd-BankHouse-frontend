import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import TopBanner from './TopBanner';
import { flexSet } from '../../styles/Variable';

function Nav() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('access_token');

  return (
    <>
      <TopBanner />
      <MainNavContainer>
        <MainNavContainerInnerWrapper>
          <GoToMainPageLink to="/">은행의집</GoToMainPageLink>
          <LeftMenuCategoryWrapper>
            <LeftMenuCategorySelected>커뮤니티</LeftMenuCategorySelected>
            <LeftMenuCategoryUnselected>스토어</LeftMenuCategoryUnselected>
            <LeftMenuCategoryUnselected>
              인테리어시공
            </LeftMenuCategoryUnselected>
          </LeftMenuCategoryWrapper>
          <RightMenuCategoryWrapper>
            <SearchBoxWrapper>
              <FaSearchIcon className="fas fa-search" />
              <SearchBoxInput
                aria-label="커뮤니티, 스토어 및 인테리어시공 검색"
                placeholder="은행의집 통합검색"
                type="search"
              />
              <SearchBoxButton>
                <FaCameraIcon className="fas fa-camera" />
              </SearchBoxButton>
            </SearchBoxWrapper>
            <CartIconWrapper>
              <FaShoppingCartIcon className="fas fa-shopping-cart" />
            </CartIconWrapper>
            <LoginAndSignUpWrapper>
              <GoToLoginPageLink to="/login">
                {isLoggedIn ? '로그아웃' : '로그인'}
              </GoToLoginPageLink>
              <GoToSignUpPageLink to="/signup">회원가입</GoToSignUpPageLink>
            </LoginAndSignUpWrapper>
            <WritingMenuWrapper>
              <WritingMenuButton>
                <GoToWritingPageLink to="/writing">글쓰기</GoToWritingPageLink>
                <FaChevronDownIcon className="fas fa-chevron-down" />
              </WritingMenuButton>
            </WritingMenuWrapper>
          </RightMenuCategoryWrapper>
        </MainNavContainerInnerWrapper>
      </MainNavContainer>
      <BottomNavContainer>
        <BottomNavContainerInnerWrapper>
          <CommunityMenuWrapper>
            {COMMUNITY_CATEGORY_LIST.map(communityCategory => {
              return (
                <CommunityMenuCategories
                  key={communityCategory.menuName}
                  to={communityCategory.path}
                  isselected={location.pathname === communityCategory.path}
                >
                  {communityCategory.menuName}
                </CommunityMenuCategories>
              );
            })}
          </CommunityMenuWrapper>
          <RightSideMenuWrapper to="/">
            <BankHouseLogo alt="BankHouse Logo" src="/images/logoImage.png" />
            <BetaVersionInterior>3D인테리어(BETA)</BetaVersionInterior>
          </RightSideMenuWrapper>
        </BottomNavContainerInnerWrapper>
      </BottomNavContainer>
    </>
  );
}

const COMMUNITY_CATEGORY_LIST = [
  { menuName: '홈', path: '/' },
  { menuName: '사진', path: '/photo' },
  { menuName: '집들이', path: '/houseparty' },
  { menuName: '노하우', path: '/knowhow' },
  { menuName: '전문가집들이', path: '/experthouseparty' },
  { menuName: '셀프가이드', path: '/selfguide' },
  { menuName: '질문과답변', path: '/questionandanswer' },
  { menuName: '이벤트', path: '/event' },
];

const MainNavContainer = styled.div`
  position: sticky;
  top: 0px;
  right: 0px;
  left: 0px;
  height: 80px;
  background-color: #ffffff;
  border-bottom: 1px solid ${({ theme }) => theme.borderLine};
  z-index: 3;
`;

const MainNavContainerInnerWrapper = styled.div`
  ${flexSet()}
  max-width: 1256px;
  height: 80px;
  margin: 0 auto;
  padding: 10px 60px;
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

const LeftMenuCategoryWrapper = styled.ul`
  display: flex;
  width: 35%;
  color: ${({ theme }) => theme.fontMainBlack};
  font-size: 18px;
  font-weight: 700;
`;

const LeftMenuCategorySelected = styled.li`
  margin-right: 15px;
  color: ${({ theme }) => theme.mainBlue};

  &:hover {
    cursor: pointer;
  }
`;

const LeftMenuCategoryUnselected = styled(
  LeftMenuCategorySelected.withComponent('li')
)`
  color: ${({ theme }) => theme.fontMainBlack};
`;

const RightMenuCategoryWrapper = styled.div`
  ${flexSet('flex-end')};
  width: 60%;
`;

const SearchBoxWrapper = styled.div`
  ${flexSet('start')};
  position: relative;
  width: 55%;
  margin-right: 8px;

  &:hover {
    cursor: text;
  }
`;

const FaSearchIcon = styled.i`
  position: absolute;
  transform: translateY(5%);
  left: 7px;
  color: ${({ theme }) => theme.fontMainBlack};
`;

const SearchBoxInput = styled.input`
  width: 100%;
  padding: 7px 30px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;

  &:hover {
    cursor: text;
  }
`;

const SearchBoxButton = styled.button`
  position: absolute;
  top: 0px;
  transform: translateY(30%);
  right: 5px;
  font-size: 20px;
  background-color: transparent;
  border: 0;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.mainBlue};
  }
`;

const FaCameraIcon = styled.i`
  position: absolute;
  top: 0px;
  transform: translateY(30%);
  right: 5px;
  color: ${({ theme }) => theme.fontMainBlack};
  font-size: 20px;
`;

const CartIconWrapper = styled.div`
  width: 5%;
  color: ${({ theme }) => theme.fontMainBlack};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.mainBlue};
  }
`;

const FaShoppingCartIcon = styled.i`
  ${flexSet('center', 'start')};
`;

const LoginAndSignUpWrapper = styled.div`
  ${flexSet('space-between')};
  width: 25%;
  margin: 0px 5px;
`;

const GoToLoginPageLink = styled(Link)`
  width: 43%;
  border-right: 1px solid ${({ theme }) => theme.fontFilterGray};
  color: ${({ theme }) => theme.fontMainBlack};
  text-decoration: none;
  text-align: center;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.mainBlue};
  }
`;

const GoToSignUpPageLink = styled(GoToLoginPageLink.withComponent(Link))`
  width: 57%;
  border-style: none;
`;

const WritingMenuWrapper = styled.div`
  position: relative;
  width: 15%;
`;

const WritingMenuButton = styled.button`
  width: 100%;
  margin-right: 5px;
  padding: 8px 25px 8px 12px;
  background-color: transparent;
  background-color: ${({ theme }) => theme.mainBlue};
  border: 0;
  border-radius: 5px;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const GoToWritingPageLink = styled(Link)`
  font-weight: 700;
  vertical-align: middle;
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const FaChevronDownIcon = styled.i`
  position: absolute;
  top: 0px;
  transform: translateY(80%);
  right: 10px;
  color: #ffffff;
  font-size: 13px;
`;

const BottomNavContainer = styled.div`
  height: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.borderLine};
`;

const BottomNavContainerInnerWrapper = styled.div`
  ${flexSet()}
  max-width: 1256px;
  height: 50px;
  margin: 0 auto;
  padding: 10px 60px;
`;

const CommunityMenuWrapper = styled.ul`
  display: flex;
  width: 80%;
  font-size: 18px;
  font-weight: 700;
`;

const CommunityMenuCategories = styled(Link)`
  margin-right: 30px;
  color: ${({ theme, isselected }) =>
    isselected ? theme.mainBlue : theme.fontMainBlack};
  font-size: 16px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.mainBlue};
  }
`;

const RightSideMenuWrapper = styled(Link)`
  display: flex;
  justify-content: flex-end;
  width: 20%;
  text-decoration: none;
`;

const BankHouseLogo = styled.img`
  width: 15px;
  height: 15px;
  padding-right: 5px;
`;

const BetaVersionInterior = styled.span`
  color: ${({ theme }) => theme.fontMainBlack};
  font-size: 15px;
  font-weight: 700;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.mainBlue};
  }
`;

export default Nav;
