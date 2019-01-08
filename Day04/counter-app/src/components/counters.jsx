import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0, },
      { id: 2, value: 0, },
      { id: 3, value: 0, },
      { id: 4, value: 0, },
    ]
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({
      counters,
    })
  };

  handleDeleteCounter = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({
      counters: counters,
    })
  }

  handleResetCounters = () => {
    const counters = this.state.counters.map(function (counter){
      counter.value = 0;
      return counter;
    })
    this.setState({ counters })
  }

  render() { 
    return (
      <div>
        <button 
          className="btn btn-primary m-2"
          onClick={this.handleResetCounters}
          >Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter 
            key={counter.id} 
            counter={counter}
            onDelete={this.handleDeleteCounter}
            onIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}
 
export default Counters;