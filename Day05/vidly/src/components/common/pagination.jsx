import React, { Component } from 'react';
import _ from 'lodash';

class Pagination extends Component {
  state = {
    pagesCount: [],
  }

  setPagesCount = () => {
    const count = this.props.itemsCount / this.props.pageSize;
    // const pagesCount = [...this.state.pagesCount];
    // for (let i = 1; i <= count; i++) {
    //   pagesCount.push(i);
    // }

    const pagesCount = _.range(1, count + 1);
    this.setState({ pagesCount });
  }

  componentDidMount() {
   this.setPagesCount();
  }

  render() {
    if (this.state.pagesCount <= 1) return null;
    return (
      <nav>
        <ul className="pagination">
          {this.state.pagesCount.map((page) => 
            <li className={ page === this.props.currentPage ? "page-item active" : "page-item" } key={page}>
              <a className="page-link" onClick={() => this.props.onPageChange(page)}>{page}</a>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}
 
export default Pagination;