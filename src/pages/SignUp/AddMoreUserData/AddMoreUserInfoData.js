const ADD_MORE_USER_INFO = {
  input: [
    {
      name: 'email',
      type: 'email',
      text: '이메일',
      placeholder: 'example@example.com',
      InvalidInfo: '올바른 이메일 주소양식이 아닙니다.',
    },
    {
      name: 'nickname',
      type: 'text',
      text: '별명',
      placeholder: '별명(2~15자)',
      InvalidInfo: '올바른 별명 양식이 아닙니다.',
    },
    {
      name: 'proSelf',
      type: 'text',
      text: ' 전문가 / 셀프',
      placeholder: '전문가 / 셀프',
      InvalidInfo: '올바른 양식이 아닙니다.',
    },
  ],
};

export default ADD_MORE_USER_INFO;
