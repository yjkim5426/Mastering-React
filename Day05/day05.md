# Day 05 - Pagination, Filtering, and Sorting
## 01. Introduction
###
- build a Genres filter, pagination, sorting by different columns.

## 02. Exercise - Pagination Component
###
- build pagination component
- 1. Think the interface of this component: What are the inputs that component is going to receive? What are the events it's going to raise?
- what data does this compoent need and what are the events going to raise
- Use bootstrap pagination component

## 03. Pagination - Component Interface
### build pagination component
- common/pagination.jsx
- stateless component: Pagination
```
const Pagination = props => {
  return null;
};

export default Pagination;
```
- input: total number of item // determine the interface for this component first and implement
```
<Pagination 
  itemsCount={this.state.movies.length} 
  pageSize={this.state.pageSize}
  onPageChange={this.handlePageChange}
/>
```

## 04. Pagination - Displaying Pages
### implement pagination component
- Using bootstrap pagination
- Use lodash
```
vidly $npm i lodash@4.17.10
```
```
  const pagesCount = _.range(1, count + 1);
  this.setState({ pagesCount });
```
```
const pagesCount = [...this.state.pagesCount];
for (let i = 1; i <= count; i++) {
  pagesCount.push(i);
}
```
```
<ul className="pagination">
  {this.state.pagesCount.map((page) => 
    <li className="page-item" key={page}>
      <a className="page-link">{page}</a>
    </li>
  )}
</ul>
```
- no pagination when it has single page
```
if (this.state.pagesCount <= 1) return null;
```
## 05. Pagination - Handling Page Changes
### 
- extend the interface of this component and also give it the current page.
- Add current page state
- Add active class on current page
```
<li className={ page === this.props.currentPage ? "page-item active" : "page-item" } key={page}>
```

## 06. Pagination - Paginating Data
### 
- currently we are rendering the movies that we have in the state object. Now this is our original list of movies, we don't want to change this list, as we paginate the movies or search for them or filter them we want to create a seperate array, that is the array we are going to render. 
- we can paginate the data using pageSize and currentPage.
- src/utils: create here all sorts of utility classes and functions.
- src/utils/paginate.js
```
export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
  
  // slice the array starting from 'startIndex'
  // _.slice(items, startIndex)
  
  // give it an array and the total number of items we want to take from that array.
  // _.take()
}
```
