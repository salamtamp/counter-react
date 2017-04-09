import React, { Component } from 'react'
import store from '../store'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.addCounter = this.addCounter.bind(this)
    this.subtractCounter = this.subtractCounter.bind(this)
  }

  componentWillMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  addCounter() {
    store.dispatch({ type: 'ADD_COUNTER' });
  }

  subtractCounter() {
    store.dispatch({ type: 'SUBTRACT_COUNTER' });
  }

  render() {
    let state = store.getState();

    return (
      <div className="counter">
        <h1>{this.props.label}</h1>
        <h2>{state.counter}</h2>
        <button onClick={this.addCounter}>+1</button>
        <button onClick={this.subtractCounter}>-1</button>
      </div>
    )
  }
}
