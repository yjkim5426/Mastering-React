import React, { Component } from 'react';

class Like extends Component {
  render() { 
    const heartIcon = this.props.movie.like ? "fas fa-heart" : "far fa-heart"
    return (
      <div>
        <i className={heartIcon} onClick={() => this.props.onClick(this.props.movie)}></i>
      </div>
    );
  }
}
 
export default Like;