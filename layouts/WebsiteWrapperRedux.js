import React, { Component } from 'react';
import styled from 'styled-components';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';
const inputRef = React.createRef();

const state = `{
  userTyping: false,
  hasNotification: false,
  notificationCount: 0,
  timestamp: 0,
  showNotificationBody: false,
  notifications: [],
  oldNotifications: [],
  showModal: false,
  modalInstances: [],
  modalContent: ['']
}`
class WebsiteWrapperRedux extends Component {
  state = {
    state,
    checked: true,
    loading: false,
    openNotification: false,
    showModal: false,
    inputValue: ''
  }

  change = () => {
    const newState = `{
  test: false,
  somethingElse: true,
  manyManyMore: 'test',
  somethingElse: true,
  manyManyMore: 'test'
}`

    this.setState({
      state: newState
    })
  }

  toggleFilter = () => {
    this.setState(() => ({loading: true}))
    setTimeout(() => {
      this.setState(prevState => ({checked: !prevState.checked, loading: false}))
    }, 750);
  }

  handleInput = e => {
    const showNotification = e.target.value.indexOf('τα') !== -1
    if (showNotification) {
      const newState = `{
  userTyping: true,
  hasNotification: true,
  notificationCount: 1,
  timestamp: 450239485,
  showNotificationBody: false,
  notifications: ['🍻'],
  oldNotifications: [],
  showModal: false,
  modalInstances: [],
  modalContent: ['']
}`
      this.setState({
        state: newState,
        showNotification,
        inputValue: e.target.value
      }, () => inputRef.current.focus())
    } else {
      const newState = `{
  userTyping: true,
  hasNotification: false,
  notificationCount: 0,
  timestamp: 0,
  showNotificationBody: false,
  notifications: [],
  oldNotifications: [],
  showModal: false,
  modalInstances: [],
  modalContent: ['']
}`
      this.setState({
        state: newState,
        showNotification,
        inputValue: e.target.value
      }, () => inputRef.current.focus())
    }
  }

  toggleNotification = () => {

    this.setState((p) => {
      if (p.openNotification) {
        const newState = `{
  userTyping: true,
  hasNotification: true,
  notificationCount: 1,
  timestamp: 450239485,
  showNotificationBody: false,
  notifications: ['🍻'],
  oldNotifications: [],
  showModal: false,
  modalInstances: [],
  modalContent: ['']
}`
  return {
    openNotification: false,
    state: newState
  }
      } else {
        const newState = `{
  userTyping: true,
  hasNotification: true,
  notificationCount: 1,
  timestamp: 450239485,
  showNotificationBody: true,
  notifications: ['🍻'],
  oldNotifications: [],
  showModal: false,
  modalInstances: [],
  modalContent: ['']
}`
  return {
    openNotification: true,
    state: newState
  }
      }
    })
  }

  showModal = () => {
    const newState = `{
  userTyping: true,
  hasNotification: true,
  notificationCount: 1,
  timestamp: 450239485,
  showNotificationBody: true,
  notifications: [''],
  oldNotifications: ['🍻'],
  showModal: true,
  modalInstances: ['Object'],
  modalContent: ['🍻']
}`
  this.setState({
    state: newState,
    showModal: true
  })
  }

  render() {
    return (
      <Wrapper>
        <SiteWrapper>
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
            <img id="searchState" src={require('../userTypingAction.png')} />
          }
          {
            this.state.showNotification &&
            <img
              id="notification"
              src={require('../notification.svg')}
              onClick={this.toggleNotification}
            />
          }
          {
            this.state.showNotification &&
            <img id="headerState" src={require('../headerAction.png')} />
          }
          {
            this.state.openNotification &&
            <img id="notificationState" src={require('../notificationAction.png')} />
          }
          {
            this.state.openNotification &&
            <div id="notification-body">
              <button onClick={this.showModal}>
                ΕΚΠΤΩΣΕΙΣ ΣΟΚ
              </button>
            </div>
          }
          {
            this.state.showModal &&
            <div id="modal">
              <span>🍻</span>
            </div>
          }
          {
            this.state.showModal &&
            <img src={require('../modalAction.png')} id="modalState" />
          }
          {
            this.state.loading
            ? <img src={require('../skroutz-dummy-background.svg')} />
            : this.state.checked
              ? <img src={require('../skroutz-dummy.svg')} />
              : <img src={require('../skroutz-dummy-2.svg')} />
          }
        </SiteWrapper>
        <MirrorWrapper>
          <h2>Redux State</h2>
          <CodeMirror
            value={this.state.state}
            options={{
              theme: 'monokai',
              tabSize: 4,
              keyMap: 'sublime',
              mode: 'json',
              smartIndent: true
            }}
          />
        </MirrorWrapper>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  width: 70vw;
  justify-content: space-between;
`

const MirrorWrapper = styled.div`
position: relative;

&:before {
  content: "";
  display: block;
  width: 50px;
  height: 35px;
  position: absolute;
  background: #272722;
  left: -50px;
  top: 222px;
}

&:after {
  content: "";
  width: 0;
  height: 0;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  border-right: 30px solid #272722;
  position: absolute;
  left: -80px;
  top: 210px;
}
h2 {
  margin-top: -100px;
}
.CodeMirror-lines {
    padding: 45px 30px 30px 30px;
}

pre.CodeMirror-line {
    text-align: left;
}

pre.CodeMirror-line:first-of-type {
    position: absolute;
    top: -20px;
}

pre.CodeMirror-line:last-of-type {
    float: left;
    padding-bottom: 15px;

}
`

export default WebsiteWrapperRedux

const SiteWrapper = styled.div`
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
  right: -20px;
  top: 150px;
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
  left: -200px;
  top: 300px;
}
`
