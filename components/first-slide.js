import React from 'react';
import styled from 'styled-components';


const FirstSlide = () => {
  return (
    <p>foo</p>
  );
}

export default FirstSlide;

export const Layout =  ({ children }) => console.log({children}) || (
  <div
    style={{
      width: '100vw',
      height: '100vw',
      backgroundColor: 'tomato'
    }}>
    {children}
  </div>
)
