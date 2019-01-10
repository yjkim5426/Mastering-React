import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() { 
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button 
          className="btn btn-primary m-2"
          onClick={onReset}
          >Reset
        </button>
        {counters.map(counter => (
          <Counter 
            key={counter.id} 
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}
 
export default Counters;