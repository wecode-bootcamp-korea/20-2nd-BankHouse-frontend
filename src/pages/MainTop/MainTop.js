import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flexSet } from '../../styles/Variable';

function MainTop() {
  const [imgIndexCount, setimgIndexCount] = useState(0);

  return (
    <header>
      <Row>
        <StoryEntryHomeHeaderImage>
          <Link to="/">
            <StoryEntryImageWrap>
              <StoryEntryImage
                alt="story image"
                src="https://images.unsplash.com/photo-1452457436726-a8e6ea2adf29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHRhYmxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              ></StoryEntryImage>
              <StoryEntryContentWrap>
                <StoryEntryContent>
                  <StoryEntryContentCategory>
                    34평 신축 ////
                  </StoryEntryContentCategory>
                  <StoryEntryContentTitle>
                    일 년 내내 휴양지같은 집으로
                  </StoryEntryContentTitle>
                  <StoryEntryContentProfile>
                    <StoryEntryContentProfileImage
                      alt="profile image"
                      src="https://images.unsplash.com/photo-1452457436726-a8e6ea2adf29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHRhYmxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    ></StoryEntryContentProfileImage>
                    <StoryEntryContentProfileName>
                      Bank House
                    </StoryEntryContentProfileName>
                  </StoryEntryContentProfile>
                </StoryEntryContent>
                <StoryMore>보러가기</StoryMore>
              </StoryEntryContentWrap>
            </StoryEntryImageWrap>
          </Link>
        </StoryEntryHomeHeaderImage>
        <HomeHeaderBanner>
          <Link to="/">
            <HomeHeaderBannderWrap>
              <StoryBanner
                alt="story banner"
                src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRhYmxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              ></StoryBanner>
              <BannerControl>
                <BannerControlIcon>
                  <i className="fas fa-chevron-left" />
                </BannerControlIcon>
                <HomeHeaderBannerControlPage>
                  <li className="homeHeaderBannerControlPageItem">
                    <HomeHeaderBannerControlPageButton type="button"></HomeHeaderBannerControlPageButton>
                  </li>
                  <li className="homeHeaderBannerControlPage">
                    <HomeHeaderBannerControlPageButton type="button"></HomeHeaderBannerControlPageButton>
                  </li>
                  <li className="homeHeaderBannerControlPage">
                    <HomeHeaderBannerControlPageButton type="button"></HomeHeaderBannerControlPageButton>
                  </li>
                  <li className="homeHeaderBannerControlPage">
                    <HomeHeaderBannerControlPageButton type="button"></HomeHeaderBannerControlPageButton>
                  </li>
                  <li className="homeHeaderBannerControlPage">
                    <HomeHeaderBannerControlPageButton type="button"></HomeHeaderBannerControlPageButton>
                  </li>
                </HomeHeaderBannerControlPage>
                <BannerControlIcon>
                  <i className="fas fa-chevron-right" />
                </BannerControlIcon>
              </BannerControl>
            </HomeHeaderBannderWrap>
          </Link>
        </HomeHeaderBanner>
      </Row>
    </header>
  );
}

export default MainTop;

const Row = styled.div`
  ${flexSet('center', 'center')}
  margin: 10px auto;
`;

const StoryEntryHomeHeaderImage = styled.article`
  padding: 0 15px;
`;

const StoryEntryImageWrap = styled.div`
  position: relative;
`;

const StoryEntryImage = styled.img`
  width: 847px;
  height: 565px;
  border-radius: 5px;
`;

const StoryEntryContentWrap = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 767px;
  height: 485px;
  padding: 40px;
  color: #ffffff;
  z-index: 3;
`;

const StoryEntryContentProfile = styled.div`
  display: flex;
  align-items: center;
`;

const StoryEntryContentProfileImage = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 70%;
`;

const StoryEntryContent = styled.div`
  color: #ffffff;
`;

const StoryEntryContentCategory = styled.div`
  font-size: 15px;
`;

const StoryEntryContentTitle = styled.div`
  font-size: 32px;
  margin: 15px 0;
`;

const StoryEntryContentProfileName = styled.span`
  font-size: 13px;
`;

const StoryMore = styled.div`
  ${flexSet('center', 'center')}
  width: 142px;
  height: 52px;
  border: 1px solid #ffffff;
  border-radius: 2px;
`;

const StoryBanner = styled.img`
  width: 269px;
  height: 565px;
  border-radius: 5px;
`;

const HomeHeaderBanner = styled.aside`
  padding: 0 15px;
`;

const HomeHeaderBannderWrap = styled.div`
  position: relative;
`;

const BannerControl = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 269px;
  height: 60px;
`;

const HomeHeaderBannerControlPage = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 159px;
  height: 6px;
`;

const HomeHeaderBannerControlPageButton = styled.button`
  width: 6px;
  height: 6px;
  padding: 0;
  border: none;
  border-radius: 50%;
`;

const BannerControlIcon = styled.div`
  color: #ffffff;
`;
