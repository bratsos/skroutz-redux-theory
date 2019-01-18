import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  h1 {
    text-shadow: 2px 2px white;
  }
`

export default ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)
