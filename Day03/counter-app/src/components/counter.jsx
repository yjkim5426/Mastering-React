import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3'],
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero':count;
  }

  render() { 
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          { this.state.tags.map(function(tag) {
            return <li key={tag}>{ tag }</li>;
          })}
        </ul>
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
