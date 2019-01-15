# Day 05 - Pagination, Filtering, and Sorting
## 01. Introduction
###
- build a Genres filter, pagination, sorting by different columns.

## 02. Exercise - Pagination Component
###
- build pagination component
- Use bootstrap pagination component
- First, think the interface of this component: What are the inputs that component is going to receive? What are the events it's going to raise?
- what data does this component need and what are the events going to raise

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
- input: total number of item // determine the interface for this component first and then implement
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

## 07. Pagination - Type Checking with PropTypes
### type checking
- install prop-types@15..6.2
```
npm i prop-types@15.6.2
```
-  In React, we used to have type checking internally, as part of the React library, but starting from version 15, this has moved to a different package that we neede to install separate.
- Object destructuring
```
const { itemsCount, pageSize, currentPage, onPageChange } = props;
```
- as you build components, especially reusable component. it's a good practice to use prop types to catch bugs related to type checking. This will also give some kind of documentation to your component, so whenever you want to use a reusable component, you don't have to look at it's render method to figure out what props you should give to this component, you can simply look at the prop types to figure out all the props that are typed, and whether they're required or optional.
```
Pagination.protoTypes = {
  itemsCount: PropTypes.number. isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};
```

## 08. Exercise - ListGroup Component
### implement genres list - filtering movies
- Use 'fakeGenreService.js'
- Use bootstrap list group component
- 1. Thinking about the interface of this component
- 2. implement it in a step by step fashion.

## 09. Filtering - Component Interface
###
- common/listGroup.jsx
- Think about the interface first: At a minumum this list group should get a list of items to render. And whenever the user selects an item, we should be notified so we can filter the list of movies.
```
<ListGroup
  items={this.state.genres}
  onItemSelect={this.handleGenreSelect}
/>
```
## 10. Filtering - Displaying Items
###
- Use bootstrap list group component
- Here in our list group component, you're assuming that each item has these two properties, _id and name. What if we're working with a different kind of object that doesn't have these 2 properties. Maybe instaed of _id, that property is called value. So we don't want to be coupled to this interface. We want to make our list group more flexible. To solve this issue, we need to pass 2 more props here, these props will determine the name of the target properties.
```
<ListGroup
  items={this.state.genres}
  onItemSelect={this.handleGenreSelect}
  textProperty="name"
  valueProperty="_id"
/>
```
- when we're using the list group apart from passing the list of items, we should also pass the name of text and value properties, so we can work with any kind of objects.
```
props.items.map((item) => (
  <li
    className="list-group-item"
    key={item[props.valueProperty]}
    onClick={() => props.onItemSelect(item)}
  >
    {item[props.textProperty]}
  </li>
))}
```
- With this change we are no longer coupled to our genres, and we can reuse this list group with any kind of lists.

## 11. Filtering - Default Props
###
- We can set the default value for these props and then if in the future we are working with a different kind of object that doesn't have these two properties, we can overwrite the default values.
```
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
```

## 12. Filtering - Handling Selection
###
- Add active class
```
{props.items.map((item) => (
  <li
    className={ item === props.selectedItem ? "list-group-item active" : "list-group-item"}
    key={item[props.valueProperty]}
    onClick={() => props.onItemSelect(item)}
  >
    {item[props.textProperty]}
  </li>
))}
```
- Always use the same naming rule (ref. airbnb guide)

## 13. Filtering - Implementing Filtering
###
- Use ternary operator: if selected genre is truthy, we are going to apply a filter.
```
const filtered = this.state.selectedItem ? this.state.movies.filter(m => m.genre._id === this.state.selectedItem._id) : this.state.movies;
```

## 14. Filtering - Adding All genres
###
```
componentDidMount() {
  const genres = [{ name: 'All Genres' }, ...getGenres()];

  this.setState({ 
    movies: getMovies(),
    genres,
  });
}

const filtered = this.state.selectedItem && this.state.selectedItem._id ? this.state.movies.filter(m => m.genre._id === this.state.selectedItem._id) : this.state.movies;
```
- Whenever we change the filter, we should reset the page to 1.

## 15. Sorting - Extracting MoviesTable
###