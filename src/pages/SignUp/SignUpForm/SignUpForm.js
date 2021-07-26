import React from 'react';
import { Link } from 'react-router-dom';
import SIGN_UP_DATA from '../SignUpData';
import styled from 'styled-components';
import SignUpInput from '../SignUpInput/SignUpInput';

function SignUpForm({ inputSignupValue, handleInput, buttonActive }) {
  return (
    <>
      <FormSignUp>
        {SIGN_UP_DATA.input.map((input, index) => {
          return (
            <SignupInputForm key={index}>
              <label>
                {input.text}
                {input.text === '비밀번호' && (
                  <InputInfoMessage> 8자 이상 입력해주세요.</InputInfoMessage>
                )}
                {input.text === '별명' && (
                  <InputInfoMessage>
                    다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)
                  </InputInfoMessage>
                )}
                <SignUpInput
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                  onChange={handleInput}
                  value={inputSignupValue[input.name]?.value}
                  valid={inputSignupValue[input.name]?.valid}
                  InvalidInfo={input.InvalidInfo}
                />
              </label>
            </SignupInputForm>
          );
        })}
      </FormSignUp>
      <ButtonSignUp onClick={buttonActive}>회원가입 완료</ButtonSignUp>
      <UserSignin>
        이미 아이디가 있으신가요?
        <LoginLink to="/login">로그인</LoginLink>
      </UserSignin>
    </>
  );
}
export default SignUpForm;

const FormSignUp = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  label {
    margin: 0 0 12px;
    font-size: 15px;
    font-weight: 700;
    color: #292929;
    line-height: 21px;
    word-break: keep-all;
  }
`;

const SignupInputForm = styled.div`
  margin-bottom: 30px;
`;

const InputInfoMessage = styled.div`
  margin: 5px 0;
  font-size: 12px;
  color: #757575;
`;

const ButtonSignUp = styled.button`
  width: 100%;
  height: 73px;
  margin-top: 20px;
  padding: 26px 0;
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

const UserSignin = styled.p`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 30px;
  font-size: 15px;
`;

const LoginLink = styled(Link)`
  margin-left: 10px;
  color: #424242;
`;
