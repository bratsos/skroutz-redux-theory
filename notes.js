const shallowEqual = (objA, objB) => {
  if (objA === objB) {
    return true;
  }

  const aKeys = Object.keys(objA);
  const bKeys = Object.keys(objB);
  const len = aKeys.length;

  if (bKeys.length !== len) {
    return false;
  }

  for (let i = 0; i < len; i++) {
    const key = aKeys[i];

    if (objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
};





console.log('hello world')


const number = [1,2,3,4,5]
const actions = [
  {
    type: 'TOGGLE_MODAL'
  },
  {
    type: 'START_FETCHING_DATA'
  },
  {
    type: 'FINISH_FETCHING_DATA',
    payload: {
      name: 'Skroutz'
    }
  }
]

let stateOfUI = {
  isModalOpen: false,
  fetchingData: false,
  user: {}
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'TOGGLE_MODAL':
      return {
        ...state,
        isModalOpen: !state.isModalOpen
      }
    case 'START_FETCHING_DATA':
      return {
        ...state,
        fetchingData: true
      }
    case 'FINISH_FETCHING_DATA':
      return {
        ...state,
        fetchingData: false,
        user: action.payload
      }
    default:
      return state
  }
}


// pubsub
const Redux = (reducer, initialState) => {
  let state = initialState
  let listeners = []

  const subscribe = (listener) => {
    listeners = [...listeners, listener]

    return () => {
      listeners = listeners.filter(oldListeners => oldListeners !== listener)
    }
  }

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }

  const getState = () => state

  return {
    subscribe,
    dispatch,
    getState
  }
}

const store = Redux(reducer, stateOfUI);

const modalComponent = () => {
  console.log('Something changed')
  console.log(store.getState())
}

// store.subscribe(modalComponent)
// console.log(
//   store.getState()
// )
// store.dispatch({
//   type: 'TOGGLE_MODAL'
// })

// store.dispatch({
//   type: 'nothing'
// })

const connect = (mapStateToProps, mapDispatchToProps) => component => {
  let state = store.getState();
  let subscribedState = mapStateToProps(state)

  return () => {
    const newState = store.getState()
    const newSubscribedState = mapStateToProps(newState);

    if (!shallowEqual(subscribedState, newSubscribedState)) {
      component(newSubscribedState)
      state = newState
      subscribedState = newSubscribedState
    }
  }
}

const mapStateToProps = (state) => ({
  isModalOpen: state.isModalOpen
})

const connectedModal = connect(mapStateToProps)(modalComponent)

store.subscribe(connectedModal)

store.dispatch({
  type: 'TOGGLE_MODAL'
})


store.dispatch({
  type: 'nothing'
})

store.dispatch({
  type: 'nothing'
})

store.dispatch({
  type: 'nothing'
})

store.dispatch({
  type: 'nothing'
})

store.dispatch({
  type: 'nothing'
})

store.dispatch({
  type: 'nothing'
})
store.dispatch({
  type: 'nothing'
})

store.dispatch({
  type: 'nothing'
})

store.dispatch({
  type: 'nothing'
})

store.dispatch({
  type: 'nothing'
})

store.dispatch({
  type: 'TOGGLE_MODAL'
})
