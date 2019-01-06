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
- In JSX, unlike angular, we don't have if and else, because JSX is not a templating engine.
- To render elements conditionally, we need to go back to our plain old JavaScript.
    ```
    state = {
        count: 0,
        tags: ['tag1', 'tag2'],
    };

    renderTags() {
        if (this.state.tags.length === 0) return 'there are no tags!';
        return this.state.tags.map(function(tag) {
        return <li key={tag}>{ tag }</li>;
        });
    }

    render() { 
        return (
        <div>
            <ul>
            { this.renderTags() }
            </ul>
        </div>
        );
    }
    ```
- When a JavaScript engine tries to value this expression, it looks like the first operand. In this case, the first operand is true, so it will look at the second operand. The second operand is not a boolean true or false, so the JavaScript engine tries to convert this into what we call truthy or falsey. An empty string considered falsey. A string that has at least one character is truthy. In this case, we have two perands that are both truthy. So JavaScript engine will return the second operand.
    ```
    true && 'Hi'
    // output: "Hi"
    {this.state.tags.length === 0 && 'Please create a new tag!'}
    ```

## 10. Handling Events
### 
- All these React elements have properties that are based on standard DOM events.
    ```
    <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
    ```
- Note that we are not calling this method we're simply passing a reference to it. This is different from handling events in vanilla JavaScript, in vanilla JavaScript we call the target function when setting the onClick attribute.
- Note that the name of the event here is case sensitive. e.g. onClick

## 11. Binding Event Handlers
###
- 'this' in JavaScript behaves differently from other languages so depending on how a function is called this can reference different objects. If a function is called a part of a method in an object, this in that function would always return a referene with an object. If that function is called as a stand alone function without an object reference, this by default returns the reference to the window object.
- Strict mode: If the stric mode is enabled this will return undefined.
- bind method: add a constructor method that is called when an object of this type is created. So, in the constructor at this point we do have access to this.
- 'this' is not allowed before super(): because we added a constructor in this child class. First we have to call the constructor of the parent class, using the super keyword.
    ```
    constructor() {
        super(); // base constructor
        this.handleIncrement = this.handleIncrement.bind(this);
    }
    ```
- Use bind method: bind method will return a new instance of the handle Increment function and in that function this is always referencing the current object so know matter how that function is called, this is not going to change, it's always referencing the current counter object. So this method returns a new function, we can get the function and reset handleIncrement.
- this.handleIncrement. We set that to the function that is returned from the bind method.
    ```
    handleIncrement = () => {
        console.log("Increment Clicked", this);
    }
    ```
- Use an arrow function.

## 12. Updating the State
###
- In React we do not modify the state directly. We need to use one of the methods that we inherit from the base component in React.
    ```
    this.setState({ count: this.state.count + 1, });
    ```
- this method tells React that we're updating the state and it will figure out what part of the state has changed and based on that it will bring the DOM in sync with the virtual DOM.
- we passed an object and the properties of this object will be merged with what we have in the state object, or it will overwrite those properties if they already exist.

## 13. What Happens When State Changes
###
- this.setState this method is telling React that the state of this component is going to change.
- React will then schedule a call to the render method. So sometime in the futre, this method is going to be called, we don't know when, this is an asynchronous call which means it's going to happen in the future. We don't know.
- render method is going to be called.
- render method will return a new React element (a new virtual DOM)
- React will put these side by side and compare them to figure out what elements in a virtual DOM are modified.
- Update the real DOM

## 14. Passing Event Arguments
###