import React from 'react';
import DropBtn from './DropBtn';

function DropDown({
  category,
  selectedCategory,
  updateSelectCategory,
  selectedArr,
}) {
  return (
    <React.Fragment>
      {category.length &&
        category.map(el => {
          return (
            <DropBtn
              key={el.id}
              el={el}
              selectedCategory={selectedCategory}
              updateSelectCategory={updateSelectCategory}
              selectedArr={selectedArr}
            />
          );
        })}
    </React.Fragment>
  );
}

export default DropDown;
