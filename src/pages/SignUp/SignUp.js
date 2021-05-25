import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SignUpForm from '../SignUp/SignUpForm/SignUpForm';
import SocialLogo from '../SignUp/SocialLoginLogo/SocialLogo';
import styled from 'styled-components';
import { GET_SIGNUP_API } from '../../config';
const { Kakao } = window;

function SignUp() {
  const [inputSignupValue, setInputSignupValue] = useState({
    email: { value: '', valid: '' },
    password: { value: '', valid: '' },
    repassword: { value: '', valid: '' },
    nickname: { value: '', valid: '' },
    proSelf: { value: '', valid: '' },
  });

  const history = useHistory();

  const validationFunc = {
    email: value => value.includes('@'),
    password: value => value.length >= 8,
    repassword: value => value === inputSignupValue.password.value,
    nickname: value => value.length > 2,
    proSelf: value => value === '전문가' || value === '셀프',
  };

  const handleInput = e => {
    const valid = validationFunc[e.target.name](e.target.value);
    setInputSignupValue({
      ...inputSignupValue,
      [e.target.name]: { value: e.target.value, valid },
    });
  };

  const buttonActive = e => {
    const checkvalidationArray = Object.values(inputSignupValue).every(
      v => v.valid
    );
    if (checkvalidationArray) {
      goToLogin();
    }
  };

  const goToLogin = () => {
    const { email, password, repassword, nickname, proSelf } = inputSignupValue;
    fetch(`${GET_SIGNUP_API}`, {
      method: 'POST',
      body: JSON.stringify({
        email: email.value,
        password: password.value,
        repassword: repassword.value,
        nickname: nickname.value,
        is_expert: proSelf.value === '전문가',
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          history.push('/login');
        } else {
          alert('입력 값을 확인해주세요');
        }
      });
  };

  const handleKakaoLogin = () => {
    Kakao.Auth.login({
      scope: 'profile,account_email',
      persistAccessToken: false,
      success: function (authObj) {
        localStorage.setItem('kakao_account_token', authObj.access_token);
        Kakao.API.request({
          url: '/v2/user/me',
          success: res => {
            const kakao_account = res.kakao_account;
            localStorage.setItem('user_email', kakao_account.email);
            localStorage.setItem(
              'user_nickname',
              kakao_account.profile.nickname
            );
            history.push('/check');
          },
        });
        // 밑에 부뷴은 혹시 몰라서 남겨 두었습니다. 백이랑 통신 해보고 성공하면 지울 예정입니다.
        //fetch('http://10.58.2.46:8888/users/sign-up', {
        //   method: 'POST',
        //   body: JSON.stringify({
        //     access_token: authObj.access_token,
        //     kakao_account: authObj.kakao_account,
        //   }),
        // })
        //   .then(response => response.json())
        //   .then(result => {
        //     localStorage.setItem('Kakao_token', result.access_token);
        //     if (result.message === 'SUCCESS') {
        //       console.log(`로긴성공`, '로긴성공');
        //       history.push('/check');
        //     } else {
        //       alert('입력 값을 확인해주세요');
        //       console.log(`result`, result);
        //     }
        //   });
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
    <OverallSignUpPage>
      <BankHouseLogoImage alt="bank house logo image" src="/images/home.png" />
      <BankHouseLogo
        alt="bank house logo image"
        src="/images/logo.png"
      ></BankHouseLogo>
      <ContainerUserSignUp>
        <SocialLogo handleKakaoLogin={handleKakaoLogin} />
        <SignUpForm
          inputSignupValue={inputSignupValue}
          handleInput={handleInput}
          buttonActive={buttonActive}
        />
      </ContainerUserSignUp>
    </OverallSignUpPage>
  );
}
export default SignUp;

const OverallSignUpPage = styled.section`
  width: 1136px;
  padding: 40px;
  margin: 0px auto;
`;

const ContainerUserSignUp = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  margin: 50px auto;
`;

const BankHouseLogoImage = styled.img`
  width: 30px;
  height: 30px;
`;

const BankHouseLogo = styled.img`
  width: 51px;
  height: 20px;
`;
