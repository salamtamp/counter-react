let initial = {
  counter: 0,
}

export function reducer(state = initial, action) {
  switch (action.type) {
    case 'ADD_COUNTER':
      return addCounter(state, action)
    case 'SUBTRACT_COUNTER':
      return subtractCounter(state, action)
    default:
      return state
  }
}

export function addCounter(state, action) {
  state.counter = state.counter + 1
  return state
}

export function subtractCounter(state, action) {
  state.counter = state.counter - 1
  return state
}
