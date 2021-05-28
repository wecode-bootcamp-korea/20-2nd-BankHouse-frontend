import React from 'react';
import { Link } from 'react-router-dom';
import LOGINDATA from '../LoginData';
import styled from 'styled-components';

function LoginForm({ inputLoginValue, handleInput, goToMain }) {
  return (
    <>
      <FormLogin>
        {LOGINDATA.input.map((input, index) => {
          return (
            <div key={index}>
              <input
                name={input.name}
                type={input.type}
                placeholder={input.placeholder}
                onChange={handleInput}
                value={inputLoginValue[input.name]?.value}
              />
            </div>
          );
        })}
      </FormLogin>
      <ButtonLogin onClick={goToMain}>로그인</ButtonLogin>
      <UserSignUp>
        <SigupLink>비밀번호 재설정</SigupLink>
        <SigupLink to="/signup">회원가입</SigupLink>
      </UserSignUp>
    </>
  );
}
export default LoginForm;

const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  input {
    width: 300px;
    height: 50px;
    border: solid 1px #dbdbdb;
    border-radius: 4px;
    cursor: auto;
  }
`;

const ButtonLogin = styled.button`
  width: 300px;
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

const UserSignUp = styled.p`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 30px;
  font-size: 15px;
`;

const SigupLink = styled(Link)`
  margin-left: 10px;
  color: #424242;
  text-decoration: none;
`;
