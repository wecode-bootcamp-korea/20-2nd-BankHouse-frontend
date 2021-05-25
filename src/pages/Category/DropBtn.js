import React, { useState } from 'react';
import styled from 'styled-components';

function DropBtn({ el, selectedCategory, updateSelectCategory, selectedArr }) {
  const [over, setOver] = useState(false);
  const selectedValues = Object.values(selectedCategory).map(
    el => el.categoryName
  );
  const selectedKey = selectedArr.filter(el => el[1]).map(el => el[0]);
  const onClick = (menu2, element) => {
    updateSelectCategory(menu2, element);
  };

  return (
    <DropDownList key={el.id} onMouseLeave={() => setOver(false)}>
      <Button onMouseOver={() => setOver(true)} id={el.id}>
        {selectedKey.includes(el.menuName2) ? (
          <Active>{el.menuName}</Active>
        ) : (
          <BtnText>{el.menuName}</BtnText>
        )}
        <FaChevronDown className="fas fa-chevron-down" />
      </Button>
      {over && (
        <DropBar onMouseLeave={() => setOver(false)}>
          {el.categoryList.map(element => {
            return (
              <DropBarList
                key={element.categoryId}
                onClick={() => onClick(el.menuName2, element)}
              >
                {selectedValues.includes(element.categoryName) ? (
                  <Active>{element.categoryName}</Active>
                ) : (
                  <span>{element.categoryName}</span>
                )}
              </DropBarList>
            );
          })}
        </DropBar>
      )}
    </DropDownList>
  );
}

const DropDownList = styled.li`
  margin: 0 2px;
`;

const DropBar = styled.ul`
  position: absolute;
  top: 830px;
  width: 210px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 1em 0.1px lightgray;
  z-index: 1;
`;

const DropBarList = styled.li`
  padding: 10px 20px;
  line-height: 2;

  &:hover {
    background: rgba(7, 255, 255, 0.05);
  }
`;

const Button = styled.button`
  padding: 8px 10px 8px;
  background-color: ${({ theme }) => theme.backgroundGrey};
  color: ${({ theme }) => theme.fontFilterGray};
  font-size: 17px;
  font-weight: 500;
  line-height: 1.8;

  &.active {
    background-color: ${({ theme }) => theme.mainBlue};
  }
`;

const BtnText = styled.span`
  margin-right: 5px;
`;

const Active = styled.span`
  color: ${({ theme }) => theme.mainBlue};
`;

const FaChevronDown = styled.i`
  font-size: 12px;
`;

export default DropBtn;
