import React, { useEffect, useState } from 'react';
import CategoryList from '../Category/CategoryList';
import CategoryCard from './CategoryCard';
import Pagination from './Pagination/Pagination';
import categoryListData from './CategoryListData';
import { GET_BASE_URL } from '../../config';

function Category() {
  const [cardData, setCardData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [postCount, setPostCount] = useState(1);
  const postsPerPage = 16;
  const pageNumber = Math.ceil(postCount / postsPerPage);

  useEffect(() => {
    fetchCardData();
  }, [selectedCategory]);

  const fetchCardData = () => {
    const queryString = Object.entries(selectedCategory).map(el => {
      return el[1].categoryId ? `&${el[0]}=${el[1].categoryId}` : '';
    });
    const result = queryString.join('');
    fetch(
      `${GET_BASE_URL}/posts?offset=${currentPage}&limit=${postsPerPage}${result}`
    )
      .then(response => response.json())
      .then(postdata => {
        setCardData(postdata.results);
        setPostCount(postdata.post_count);
      });
  };

  const updateSelectCategory = (category, categoryName) => {
    setSelectedCategory({ ...selectedCategory, [category]: categoryName });
  };

  const deleteSelectCategory = category => {
    setSelectedCategory({ ...selectedCategory, [category]: '' });
  };

  const clearCategoryData = () => {
    setSelectedCategory({});
  };

  return (
    <>
      <CategoryList
        selectedCategory={selectedCategory}
        updateSelectCategory={updateSelectCategory}
        deleteSelectCategory={deleteSelectCategory}
        clearCategoryData={clearCategoryData}
        categoryListData={categoryListData}
      />
      <CategoryCard cardData={cardData} />

      <Pagination
        pageNumber={pageNumber}
        paginate={setCurrentPage}
        fetchCardData={fetchCardData}
        currentPage={currentPage}
      />
    </>
  );
}

export default Category;
