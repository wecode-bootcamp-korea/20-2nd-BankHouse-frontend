import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import LoginForm from '../Login/LoginForm/LoginForm';
import SocialLogoin from '../Login/SocialLoginLogo/SocialLogin';
import { GET_LOGIN_API, GET_KAKAO_LOGIN_API } from '../../config';
import styled from 'styled-components';
const { Kakao } = window;

function Login() {
  const [inputLoginValue, setInputLoginValue] = useState({
    email: { value: '' },
    password: { value: '' },
  });

  const history = useHistory();

  const handleInput = e => {
    setInputLoginValue({
      ...inputLoginValue,
      [e.target.name]: { value: e.target.value },
    });
  };

  const goToMain = () => {
    const { email, password } = inputLoginValue;

    fetch(`${GET_LOGIN_API}`, {
      method: 'POST',
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    })
      .then(response => response.json())
      .then(result => {
        result.access_token &&
          localStorage.setItem('access_token', result.access_token);
        if (result.message === 'SUCCESS') {
          history.push('/');
        } else {
          alert('아이디 혹은 비밀번호를 확인해주세요.');
        }
      });
  };

  const handleKakaoLogin = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        fetch(`${GET_KAKAO_LOGIN_API}`, {
          headers: { Authorization: authObj.access_token },
        })
          .then(response => response.json())
          .then(result => {
            localStorage.setItem('Kakao_token', result.access_token);
            if (result.message === 'SUCCESS') {
              history.push('/');
            } else {
              alert('입력 값을 확인해주세요');
            }
          });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };

  useEffect(() => {
    return sendUnlink;
  }, []);

  const sendUnlink = () => {
    Kakao.API.request({
      url: '/v1/user/unlink',
      success: function (response) {},
      fail: function (error) {},
    });
  };

  return (
    <OverallSignInPage>
      <Link to="/">
        <BankHouseLogoImage
          alt="bankHouse Logo image"
          src="/images/home.png"
        ></BankHouseLogoImage>
        <BankHouseLogo
          alt="bankHouse Logo image"
          src="/images/logo.png"
        ></BankHouseLogo>
      </Link>
      <ContainerUserSignIn>
        <LoginForm
          inputLoginValue={inputLoginValue}
          handleInput={handleInput}
          goToMain={goToMain}
        />
      </ContainerUserSignIn>
      <SocialLogoin handleKakaoLogin={handleKakaoLogin} />
    </OverallSignInPage>
  );
}
export default Login;

const OverallSignInPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  margin: 100px auto;
  padding: 40px;
`;

const ContainerUserSignIn = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px auto;
`;

const BankHouseLogoImage = styled.img`
  width: 50px;
  height: 50px;
`;

const BankHouseLogo = styled.img`
  width: 51px;
  height: 20px;
`;
