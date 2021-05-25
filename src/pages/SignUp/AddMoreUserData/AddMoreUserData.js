import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ADD_MORE_USER_INFO from './AddMoreUserInfoData';
import { GET_SIGNUP_API } from '../../../config';
import styled from 'styled-components';

function AddMoreUserData() {
  const [inputMoreInfo, setInputMoreInfo] = useState({
    email: { value: localStorage.getItem('user_email'), valid: '' },
    nickname: { value: localStorage.getItem('user_nickname'), valid: '' },
    proSelf: { value: '', valid: '' },
  });

  const history = useHistory();

  const validationFunc = {
    email: value => value.includes('@'),
    nickname: value => value.length >= 1,
    proSelf: value => value === '전문가' || value === '셀프',
  };

  const handleMoreInput = e => {
    const valid = validationFunc[e.target.name](e.target.value);
    setInputMoreInfo({
      ...inputMoreInfo,
      [e.target.name]: { value: e.target.value, valid },
    });
  };

  const buttonActive = e => {
    const isAllValid = Object.values(inputMoreInfo).every(v => v.valid);
    if (isAllValid) {
      sendMoreUserInfo();
    }
  };

  const sendMoreUserInfo = () => {
    const { email, nickname, proSelf } = inputMoreInfo;
    fetch(`${{ GET_SIGNUP_API }}`, {
      method: 'POST',
      body: JSON.stringify({
        access_token: localStorage.getItem('kakao_account_token'),
        email: email.value,
        nickname: nickname.value,
        is_expert: proSelf.value === '전문가',
      }),
    })
      .then(response => response.json())
      .then(result => {
        localStorage.setItem('account_token', result.access_token);
        if (result.message === 'SUCCESS') {
          history.push('/');
        } else {
          alert('입력 값을 확인해주세요');
        }
      });
  };

  return (
    <FormAddMoreInfo>
      <MainTitle>추가 정보 입력</MainTitle>
      {ADD_MORE_USER_INFO.input.map((input, index) => {
        return (
          <FormAddMoreInfoForm key={index}>
            <label>
              {input.text}
              {input.text === '별명' && (
                <InputInfoMessage>
                  다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)
                </InputInfoMessage>
              )}
              <Input
                name={input.name}
                type={input.type}
                placeholder={input.placeholder}
                value={inputMoreInfo[input.name]?.value}
                onChange={handleMoreInput}
              ></Input>
            </label>
          </FormAddMoreInfoForm>
        );
      })}
      <SendMoreInfo onClick={buttonActive}>완료</SendMoreInfo>
    </FormAddMoreInfo>
  );
}

export default AddMoreUserData;

const FormAddMoreInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 360px;
  margin: 100px auto;

  label {
    margin: 0 0 12px;
    font-size: 15px;
    font-weight: 700;
    color: #292929;
    line-height: 21px;
    word-break: keep-all;
  }
`;

const MainTitle = styled.h1`
  margin: 50px 0 30px 0;
  font-size: 30px;
  font-weight: bold;
`;

const FormAddMoreInfoForm = styled.div`
  margin-bottom: 30px;
`;

const InputInfoMessage = styled.div`
  margin: 5px 0;
  font-size: 12px;
  color: #757575;
`;

const Input = styled.input`
  width: 328px;
  height: 38px;
  margin-top: 5px;
  padding: 0px 15px;
  border: solid 1px
    ${props => (props.valid || !props.isBlurOnce ? '#dbdbdb' : '#ff7777')};
  border-radius: 4px;
`;

const SendMoreInfo = styled.button`
  width: 360px;
  height: 50px;
  margin-top: 20px;
  color: #fff;
  background-color: #35c5f0;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #09addb;
  }
`;
