import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';
import TopBanner from './TopBanner';
import { flexSet } from '../../styles/Variable';
import { mediaQuery } from '../../styles/Variable';

const COMMUNITY_CATEGORY_LIST = [
  { menuName: '홈', path: '/' },
  { menuName: '사진', path: '/photo' },
  { menuName: '집들이', path: '/houseparty' },
  { menuName: '노하우', path: '/knowhow' },
  { menuName: '전문가집들이', path: '/experthouseparty' },
  { menuName: '셀프가이드', path: '/selfguide' },
  { menuName: '질문과답변', path: '/questionandanswer' },
  // { menuName: '이벤트', path: '/event' },
];

function Nav({ theme }) {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('access_token');

  return (
    <>
      <TopBanner />
      <TopNav>
        <NavLogo to="/">은행의집</NavLogo>
        <Gnb>
          <GnbMenu current>커뮤니티</GnbMenu>
          <GnbMenu>스토어</GnbMenu>
          <GnbMenu>인테리어시공</GnbMenu>
        </Gnb>
        <NavSearch>
          <NavSearchText placeholder="은행의집 통합검색" />
          <MagnifyingIcon className="fas fa-search" />
          <CameraIcon className="fas fa-camera" />
        </NavSearch>
        <CartAndLogin>
          <CartIcon className="fas fa-shopping-cart" />
          <LoginIcon>
            <NavLogin>로그인</NavLogin>
            <NavLogin>회원가입</NavLogin>
          </LoginIcon>
        </CartAndLogin>
        <NavWriteBtn>글쓰기</NavWriteBtn>
      </TopNav>
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

const TopNav = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  flex: 1 0 auto;
  padding: 10px 60px;
  height: 80px;
  margin: 0 auto;
  max-width: 1256px;

  @media only screen and (max-width: ${mediaQuery.BREAK_POINT_TABLET}px) {
    padding: 10px 40px;
  }
`;

const NavLogo = styled(Link)`
  position: static;
  margin-right: 10px;
  font-size: 25px;
  font-family: '잘풀리는오늘';
  transform: none;
`;

const Gnb = styled.nav`
  display: flex;
  flex: 1 0 auto;
`;

const GnbMenu = styled(Link)`
  color: ${({ theme, current }) =>
    current ? theme.mainBlue : theme.fontMainBlack};
  font-size: 18px;
  font-weight: 700;
  padding: 14px 6px;

  &:hover {
    color: ${({ theme }) => theme.mainBlue};
  }
`;

const NavSearch = styled.div`
  position: relative;
`;

const NavSearchText = styled.input`
  border: 1px solid ${({ theme }) => theme.inputGray};
  border-radius: 4px;
  padding: 8px 9px 10px 39px;
  font-size: 15px;

  ::placeholder {
    color: ${({ theme }) => theme.NavGrayInputPlaceholder};
  }
`;

const Icons = styled.i`
  color: ${({ theme }) => theme.NavGrayIconBackground};
  top: 11px;
  width: 20px;
  height: 20px;
`;

const MagnifyingIcon = styled(Icons)`
  position: absolute;
  left: 10px;
`;

const CartAndLogin = styled.div`
  display: flex;
  position: relative;
  margin-right: 10px;
`;

const CameraIcon = styled(Icons)`
  position: absolute;
  right: 10px;
`;

const CartIcon = styled(Icons)`
  position: relative;
  top: 1px;
  margin: 0 9px;
`;

const LoginIcon = styled.div`
  display: flex;
  color: ${({ theme }) => theme.NavGrayFontColor};
`;

const NavLogin = styled.div`
  position: relative;
  margin: 0 9px;
  font-size: 15px;
  font-weight: 700;
  line-height: 19px;

  &:nth-child(1)::after {
    content: '';
    position: absolute;
    top: 2px;
    right: -25%;
    width: 1px;
    height: 15px;
    background-color: ${({ theme }) => theme.NavGrayFontColor};
  }
`;

const NavWriteBtn = styled.button`
  position: relative;
  padding: 8px 15px 10px 0;
  width: 100px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.mainBlue};
  color: #fff;
  font-weight: 700;
  font-size: 16px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    right: 15px;
    top: 50%;
    width: 6px;
    height: 6px;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(45deg) translateY(-73%);
  }
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
