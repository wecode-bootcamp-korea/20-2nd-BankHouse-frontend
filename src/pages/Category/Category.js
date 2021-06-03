import React, { useEffect, useState } from 'react';
import CategoryList from '../Category/CategoryList';
import CategoryCard from './CategoryCard';
import Pagination from './Pagination/Pagination';
import categoryListData from './CategoryListData';

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
      return `&${el[0]}=${el[1].categoryId}`;
    });
    const result = queryString.join('');
    fetch(
      `http://webankhouse.com/posts?offset=${currentPage}&limit=${postsPerPage}${result}`
    )
      .then(response => response.json())
      .then(postdata => {
        setCardData([...cardData, ...postdata.results]);
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

  const currentPosts = num => {
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    let currentPosts = 0;
    currentPosts = num.slice(indexOfFirst, indexOfLast);
    return currentPosts;
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
      <CategoryCard cardData={currentPosts(cardData)} />

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
