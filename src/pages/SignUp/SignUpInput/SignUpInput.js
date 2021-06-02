import React, { useState } from 'react';
import styled from 'styled-components';

function SignUpInput(props) {
  const [isBlurOnce, setIsBlurOnce] = useState(false);

  return (
    <>
      <Input
        {...props}
        isBlurOnce={isBlurOnce}
        onBlur={() => setIsBlurOnce(true)}
      />
      {!props.valid && isBlurOnce && (
        <InputInvalidMessage>{props.InvalidInfo}</InputInvalidMessage>
      )}
    </>
  );
}

export default SignUpInput;

const Input = styled.input`
  width: 360px;
  height: 38px;
  margin-top: 5px;
  padding: 0px 15px;
  border: solid 1px
    ${props => (props.valid || !props.isBlurOnce ? '#dbdbdb' : '#ff7777')};
  border-radius: 4px;
`;

const InputInvalidMessage = styled.div`
  margin: 10px 0;
  font-size: 12px;
  color: #ff7777;
`;
