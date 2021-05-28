import React from 'react';
import styled from 'styled-components';
import Select from './Select';

function SelectContainer({
  isBtnOnceClicked,
  selectedCategory,
  menuName,
  top,
  full,
  onSelect,
}) {
  return (
    <SelectContainerWrapper full={full} top={top}>
      <Select
        full={full}
        menuName={menuName}
        onSelect={onSelect}
        selectedCategory={selectedCategory}
        isBtnOnceClicked={isBtnOnceClicked}
      />
    </SelectContainerWrapper>
  );
}

const SelectContainerWrapper = styled.div`
  position: relative;
  width: ${({ full }) => full && '100%'};
  margin-right: ${({ top }) => top && '10px'};
  margin-bottom: 10px;

  &::after {
    content: '';
    position: absolute;
    display: block;
    right: 21px;
    top: 50%;
    transform: translateY(-50%);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid grey;
  }
`;

export default SelectContainer;
