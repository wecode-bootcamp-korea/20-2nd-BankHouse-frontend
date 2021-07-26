import React, { useState } from 'react';
import styled from 'styled-components';
import Option from './Option';

function Select({
  isBtnOnceClicked,
  selectedCategory,
  menuName,
  onSelect,
  full,
}) {
  return (
    <SelectWrapper
      name={menuName.menuNameValue}
      onChange={e => {
        onSelect(menuName.menuNameValue, e.target.value);
      }}
      full={full}
      defaultValue=""
      isSelected={!!selectedCategory?.[menuName.menuNameValue]}
      isBtnOnceClicked={isBtnOnceClicked}
    >
      <Option menuName={menuName.menuName} grey value="" disabled="disabled" />
      {menuName.categoryList.map(sub => (
        <Option
          menuName={sub.categoryName}
          value={sub.categoryId}
          key={sub.categoryId}
        />
      ))}
    </SelectWrapper>
  );
}

const SelectWrapper = styled.select`
  position: relative;
  padding: 15px;
  min-width: 160px;
  width: ${({ full }) => full && '100%'};
  border: 1px solid
    ${({ theme, isSelected, isBtnOnceClicked }) =>
      !isSelected && isBtnOnceClicked ? 'red' : theme.inputGray};
  border-radius: 5px;
  background-color: #fff;
  outline: none;
  color: ${({ theme, isSelected }) =>
    isSelected ? 'black' : theme.placeholderGrey};
  text-indent: 15px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &::-ms-expand {
    display: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.backgroundGrey};
  }
`;

export default Select;
