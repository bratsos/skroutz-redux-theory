import React from 'react';
import styled from 'styled-components';


const inputRef = React.createRef();

class WebsiteWrapper extends React.Component {
  state = {
    checked: true,
    loading: false,
    openNotification: false,
    showModal: false,
    inputValue: ''
  }

  toggleFilter = () => {
    this.setState(() => ({loading: true}))
    setTimeout(() => {
      this.setState(prevState => ({checked: !prevState.checked, loading: false}))
    }, 750);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.toggleFilter)
  }

  handleInput = e => {
    const showNotification = e.target.value.indexOf('τα') !== -1
    this.setState({
      showNotification,
      inputValue: e.target.value
    }, () => inputRef.current.focus())
  }

  render() {
    return (
      <Wrapper>
        <input
          autoComplete="off"
          id="search"
          value={this.state.inputValue}
          onChange={this.handleInput}
          ref={inputRef}
        />
        <input onClick={this.toggleFilter} type="checkbox" id="checkbox" checked={this.state.checked}/>

        {
          this.state.inputValue.length !== 0 &&
          <img id="searchState" src="../searchState.png" />
        }
        {
          this.state.showNotification &&
          <img
            id="notification"
            src="../notification.svg"
            onClick={() => this.setState((p) => ({openNotification: !p.openNotification }))}
          />
        }
        {
          this.state.showNotification &&
          <img id="headerState" src="../headerState.png" />
        }
        {
          this.state.openNotification &&
          <img id="notificationState" src="../notificationState.png" />
        }
        {
          this.state.openNotification &&
          <div id="notification-body">
            <button onClick={() => this.setState(p => ({showModal: !p.showModal}))}>
              ΕΚΠΤΩΣΕΙΣ ΣΟΚ
            </button>
          </div>
        }
        {
          this.state.showModal &&
          <div id="modal">
            <span>🤯</span>
          </div>
        }
        {
          this.state.showModal &&
          <img src="../modalState.png" id="modalState" />
        }
        {
          this.state.loading
          ? <img src="../skroutz-dummy-background.svg" />
          : this.state.checked
            ? <img src="../skroutz-dummy.svg" />
            : <img src="../skroutz-dummy-2.svg" />
        }
      </Wrapper>
    )
  }
}

export default WebsiteWrapper

const Wrapper = styled.div`
position: relative;

#search {
  z-index: 2;
  background: transparent;
  position: absolute;
  top: 24px;
  left: 77px;
  height: 21px;
  border: none;
  width: 165px;
  font-size: 17px;
  line-height: 21px;
}

#checkbox {
  position: absolute;
  top: 292px;
  left: 18px;
  opacity: 0;
}

#searchState {
  position: absolute;
  top: -140px;
  left: -210px;
}

#notification {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  cursor: pointer;
}

#notification-body {
  position: absolute;
  background: white;
  right: 10px;
  top: 50px;
  display: flex;
  padding: 1em;
  border-radius: 5px;
  box-shadow: 0px 2px 2px rgba(0,0,0,.25);

  button {
    border: none;
    background: #4CAF50;
    padding: 10px 15px;
    color: white;
    border-radius: 3px;
    font-weight: 600;
    cursor: pointer;
  }
}

#headerState {
  position: absolute;
  top: -210px;
  right: -130px;
}

#notificationState {
  position: absolute;
  right: -370px;
  top: 30px;
}

#modal {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #2f2f2f52;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    height: 50%;
    width: 80%;
    background: white;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(0,0,0,.25);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 140px;
  }
}

#modalState {
  position: absolute;
  left: -310px;
  top: 200px;
}
`
