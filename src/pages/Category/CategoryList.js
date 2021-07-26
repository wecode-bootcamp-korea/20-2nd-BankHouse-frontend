import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DropDown from './DropDown';
import { flexSet } from '../../styles/Variable';

function CategoryList({
  selectedCategory,
  updateSelectCategory,
  deleteSelectCategory,
  clearCategoryData,
  categoryListData,
}) {
  const [category, setCategory] = useState([]);
  const selectedArr = Object.entries(selectedCategory).map(el => [
    el[0],
    el[1].categoryName,
  ]);
  const selectedValues = selectedArr.map(el => el[1]).filter(el => el);

  useEffect(() => {
    setCategory(categoryListData);
  }, []);

  return (
    <WrapCategory>
      <FilterBar>
        <DropDown
          category={category}
          selectedCategory={selectedCategory}
          updateSelectCategory={updateSelectCategory}
          selectedArr={selectedArr}
        />
      </FilterBar>
      <CategoryUl>
        {selectedArr.map(el => {
          return (
            el[1] && (
              <CategoryName
                key={el[1]}
                onClick={() => deleteSelectCategory(el[0], category)}
              >
                <SelectedBtn>
                  {el[1]}
                  <FaTimes className="fas fa-times" />
                </SelectedBtn>
              </CategoryName>
            )
          );
        })}
        {selectedValues.length ? (
          <ClearBtn onClick={clearCategoryData}>초기화</ClearBtn>
        ) : null}
      </CategoryUl>
    </WrapCategory>
  );
}

const WrapCategory = styled.section`
  width: 1150px;
  margin: auto;
  padding: 10px 0 5px;
`;

const FilterBar = styled.ul`
  ${flexSet('flex-start', 'center')}
  padding: 5px 0;
`;

const CategoryName = styled.li`
  margin: 10px 4px;
  padding: 4px 10px;
  background: ${({ theme }) => theme.mainBlue};
  border-radius: 20px;

  &:hover {
    background: #2eb1d9;
  }
`;

const SelectedBtn = styled.button`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

const FaTimes = styled.i`
  width: 14px;
  height: 14px;
  margin-left: 8px;
  padding: 2px;
  background: #fff;
  color: ${({ theme }) => theme.mainBlue};
  font-size: 12px;
  line-height: 1.1;
  border-radius: 50%;
`;

const CategoryUl = styled.ul`
  ${flexSet('flex-start', 'center')}
`;

const ClearBtn = styled.button`
  margin: 10px 2px;
  padding: 4px 10px;
  color: ${({ theme }) => theme.mainBlue};
  font-size: 16px;
  font-weight: 600;
  line-height: 0.8;

  &::hover {
    opacity: 0.8;
  }
`;

export default CategoryList;
