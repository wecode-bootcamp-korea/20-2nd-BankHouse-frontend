import React from 'react';
import styled from 'styled-components';

function PageLi({ num, paginate, fetchCardData, currentPage }) {
  const handlePageNumber = num => {
    paginate(num);
    fetchCardData();
  };

  return (
    <PageList key={num}>
      {num === currentPage ? (
        <PageNumber onClick={() => handlePageNumber(num)}>{num}</PageNumber>
      ) : (
        <span onClick={() => handlePageNumber(num)}>{num}</span>
      )}
    </PageList>
  );
}

const PageList = styled.li`
  width: 40px;
  height: 40px;
  margin: 5px;
  padding: 1px;
  color: ${({ theme }) => theme.fontFilterGray};
  border-radius: 50%;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.mainBlue};
    transform: scale(1.5);
  }
`;

const PageNumber = styled.span`
  color: ${({ theme }) => theme.mainBlue};
  font-size: 32px;
  line-height: 1.3;
`;

export default PageLi;
