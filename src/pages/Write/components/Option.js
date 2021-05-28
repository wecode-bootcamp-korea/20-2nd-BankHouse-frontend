import React from 'react';
import styled from 'styled-components';

function Option({ menuName, grey, value, disabled }) {
  return (
    <OptionWrapper grey={grey} value={value} disabled={disabled}>
      {menuName}
    </OptionWrapper>
  );
}

const OptionWrapper = styled.option`
  font-size: 15px;
  margin-right: 10px;
  color: ${props => (props.grey ? 'grey' : '#424242')};
`;

export default Option;
