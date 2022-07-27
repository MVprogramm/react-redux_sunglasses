import React from 'react';
import { connect } from 'react-redux';
import * as counterActions from './counter.actions.js';
import './counter.scss';

class Counter extends React.Component {

  render() {
    return (
      <div className="counter">
        <button 
          data-action="decrease" 
          className="counter__button"
          onClick={this.props.decrement}
        >
          -
        </button>
        <span 
          className="counter__value"
          onClick={this.props.reset}
        >
          {this.props.counter}
        </span>
        <button 
          data-action="increase" 
          className="counter__button"
          onClick={this.props.increment}
        >
          +
        </button>
    </div>
    )
  }
};

const mapState = (state) => {
  return {
    counter: state
  }
}

const mapDispatch = {
  increment: counterActions.increment,
  decrement: counterActions.decrement,
  reset: counterActions.reset
}

export default connect(mapState, mapDispatch)(Counter);