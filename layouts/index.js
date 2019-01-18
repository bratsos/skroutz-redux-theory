import React, { Component }from 'react';
import styled from 'styled-components';
import WebsiteWrapper from './WebsiteWrapper';
import WebsiteWrapperRedux from './WebsiteWrapperRedux';

export const FirstSlide = ({ children }) => (
  <TitleWithShadow>
    <img src="../first-slide-svg.svg" />
    {children}
  </TitleWithShadow>
)

const TitleWithShadow = styled.div`
  color: #fff;
  width: 100vw;
  height: 100vh;
  background: #f68b24;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    text-shadow: 2px 2px 2px rgba(0,0,0,.75);
  }

  p {
    font-weight: 400;
    font-size: 40px;
    margin: 0
  }

  img {
    position: fixed;
    opacity: .3;
    width: 50%;
    height: 50%;
    top: 50%;
    right: 0;
  }
`

export const CodeSlide = ({ children }) => (
  <CodeSlideWrapper>
    {children}
  </CodeSlideWrapper>
)

const CodeSlideWrapper = styled.div`
  background: pink;
`
export { WebsiteWrapper, WebsiteWrapperRedux }
