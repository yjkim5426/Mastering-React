# Day 03 - Components
## 01. Introduction
## 02. Setting Up the Project
- create new project
    ```
    $create-react-app counter-app
    ```
- run counter-app
    ```
    $cd counter-app
    $npm start
    ```
- install bootstrap
    ```
    $npm i bootstrap@4.1.1
    ```
- import bootstrap in index.js
    ```
    import 'bootstrap/dist/css/bootstrap.css';
    ```

## 03. Your First React Component
###
- create a folder 'components' under the src folder: by convention we put all our components here.
- create counter.jsx file in components folder.
- Use the jsx extension instead of just js, because with this you will get better code completion.
- import react and the component class from the react module.
        -Use 'Simple React Snippet' shortcut
                - 'imrc': short for import react component
                - 'cc': short for create class

- import Counter component in index.js and render it.
    ```
    import Counter from './components/counter';
    ```

- render Counter component to React container
    ```
    ReactDOM.render(<Counter />, document.getElementById('root'));
    ```

## 04. Specifying Children
###
- JSX expressions must have one parent element: Because the first argument of React.createElement method is single type of element.
        - use <div> to wrap all the elements
        - use <React.Fragment>

## 05. Embedding Expressions
###
- state: state is a special property in React component, and basically it's an object that includes any data that the component needs.
- {}: curly braces in JSX. In between these curly braces we can add any valid JavaScript expression.
        - An expression is something that produces a value: e.g. some function which return a value.
        - JSX is an expression: jsx expression get compiled to react elements.
    ```
    formatCount() {
        const { count } = this.state;
        return count === 0 ? <h1>Zero</h1>:count;
    }
    ```
- jsx expressions are just like normal JavaScript objects. You can return them from a function, you can pass them to a function, you can also use them as a value of a constant or a variable.

## 06. Setting Attributes
###
- className: to apply a class to an element
- applying styles:
        - Use class for performance and maintainability
        - apply a style to a specific element: in JSX, we have this style attribute that we need to set to a plain JavaScript object.
        style = {'plain javascript object}
    ```
    style = {
        // assign CSS attribute with camel case notation.
        color: 'red',
        fontSize: 30,
    }

    <span style={ this.style } className="badge badge-primary m-2">{this.formatCount()}</span>
    ```
    - Use inline style: use double curly braces.
        ```
        <span style={{ color: 'red', fontSize: 30 }} className="badge badge-primary m-2">{this.formatCount()}</span>
        ```

## 07. Rendering Classes Dynamically
###
- dynamic class assign
    ```
    render() { 
        return (
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count ? "primary" : "warning";
        return classes;
    }
    ```

## 08. Rendering Lists
### map method of arrays
- We can use the map method to map each element in this array, to a react element.
    ```
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3'],
    };

    <ul>
        { this.state.tags.map(function(tag) {
                return <li>{ tag }</li>;
            })
        }
    </ul>
    ```
- Each child in an array or iterator should have a unique key prop.
- if the state of this react element in the virtual DOM changes, react wants to quickly figure out what element is changed. and where in the DOM it should make changes to keep the DOM in sync with the virtual DOM.
    ```
    return <li key={tag}>{ tag }</li>;
    ```

## 09. Conditional Rendering
### 
