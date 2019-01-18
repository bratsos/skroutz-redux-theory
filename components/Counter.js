import React, { Component } from 'react';
import styled from 'styled-components';

class Counter extends Component {
  state = {
    counter: 0
  }
  render() {
    return (
      <Wrapper>
        Counter {this.state.counter}
        <button onClick={() => this.setState({ counter: this.state.counter + 1})}>
          Add
        </button>
        <button onClick={() => this.setState({ counter: this.state.counter - 1})}>
          Remove
        </button>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background: red;
`

export default Counter;
