import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3'],
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero':count;
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1, });
  }

  render() { 
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
        {console.log(this.state.tags)}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count ? "primary" : "warning";
    return classes;
  }
}

export default Counter;
