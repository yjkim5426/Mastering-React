import React, { Component } from "react";

class Counter extends Component {
  render() {
    const disabled = (this.props.counter.value === 0) ? true : false;
    return (
      <div className='row'>
        <div className='col-1'>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className='col'>
          <button 
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm">
            +
          </button>
          <button 
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2" disabled={disabled}>
            -
          </button>
          <button 
            className="btn btn-danger btn-sm"
            onClick={() => this.props.onDelete(this.props.counter.id)}>
            X
          </button>
        </div>
      </div>
    );
  }
  
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  } 

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value ? "primary" : "warning";
    return classes;
  }
}

export default Counter;
