import React from 'react';
import { flexSet } from '../../styles/Variable';
import styled from 'styled-components';

function TopBanner() {
  return (
    <TopBannerContainer>
      <WrapBannerComments>
        <FirstBannerComment>첫 구매라면 앱에서 최대</FirstBannerComment>
        <SecondBannerComment>20,000원 할인</SecondBannerComment>
        <FaDownload className="fas fa-download" />
      </WrapBannerComments>
      <FaTimes className="fas fa-times" />
    </TopBannerContainer>
  );
}

const TopBannerContainer = styled.div`
  position: relative;
  height: 50px;
  background-color: #00c7f5;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const WrapBannerComments = styled.div`
  ${flexSet()};
  height: 50px;
`;

const FirstBannerComment = styled.span`
  margin-right: 10px;
  color: #dcf5fd;
  font-size: 15px;
`;

const SecondBannerComment = styled.span`
  margin-right: 10px;
  color: #fbfeff;
  font-size: 20px;
  font-weight: 700;
`;

const FaDownload = styled.i`
  color: #ffffff;
  font-size: 25px;
`;

const FaTimes = styled.i`
  position: absolute;
  top: 0px;
  transform: translateY(13px);
  right: 20px;
  color: white;
  font-size: 25px;
`;

export default TopBanner;
