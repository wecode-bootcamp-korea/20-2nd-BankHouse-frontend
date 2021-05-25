const CategoryListData = [
  {
    id: 1,
    menuName: '정렬',
    menuName2: 'orderby',
    categoryList: [
      {
        categoryId: 'recent',
        categoryName: '최근 인기순',
      },
      {
        categoryId: 'hit',
        categoryName: '조회수',
      },
      {
        categoryId: 'like',
        categoryName: '좋아요',
      },
    ],
  },
  {
    id: 2,
    menuName: '주거형태',
    menuName2: 'livingtype',
    categoryList: [
      {
        categoryId: 1,
        categoryName: '원룸&오피스텔',
      },
      {
        categoryId: 2,
        categoryName: '아파트',
      },
      {
        categoryId: 3,
        categoryName: '단독주택',
      },
    ],
  },
  {
    id: 3,
    menuName: '공간',
    menuName2: 'space',
    categoryList: [
      {
        categoryId: 1,
        categoryName: '서재',
      },
      {
        categoryId: 2,
        categoryName: '주방',
      },
      {
        categoryId: 3,
        categoryName: '발코니',
      },
      {
        categoryId: 4,
        categoryName: '화장실',
      },
      {
        categoryId: 5,
        categoryName: '거실',
      },
    ],
  },
  {
    id: 4,
    menuName: '평수',
    menuName2: 'size',
    categoryList: [
      {
        categoryId: 1,
        categoryName: '10평 미만',
      },
      {
        categoryId: 2,
        categoryName: '10평대',
      },
      {
        categoryId: 3,
        categoryName: '20평대',
      },
      {
        categoryId: 4,
        categoryName: '30평대',
      },
      {
        categoryId: 5,
        categoryName: '40평대',
      },
      {
        categoryId: 6,
        categoryName: '50평 이상',
      },
    ],
  },
  {
    id: 5,
    menuName: '스타일',
    menuName2: 'style',
    categoryList: [
      {
        categoryId: 1,
        categoryName: '모던',
      },
      {
        categoryId: 2,
        categoryName: '북유럽',
      },
      {
        categoryId: 3,
        categoryName: '내추럴',
      },
    ],
  },
  {
    id: 6,
    menuName: '셀프/전문',
    menuName2: 'expert',
    categoryList: [
      {
        categoryId: 'False',
        categoryName: '셀프',
      },
      {
        categoryId: 'True',
        categoryName: '전문가',
      },
    ],
  },
];

export default CategoryListData;
