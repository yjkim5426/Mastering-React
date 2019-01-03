# Day 01
## 01. What is React
- React is a JavaScript library for building fast and interactive user interfaces. It was developed at Facebook in 2011.
### Component
- At the heart of all React operations are components, a component is essentially a piece of user interface.
- When building applications with React, we build a bunch of independent, isolatedm and resusable components, and then compose them to build complex user interfaces. 
- Every React application has at least one component, which we refer to as the root component. This component represents the entire application and contains other child components.
- Every React application is essentially a tree of components.
- In terms of implementation, a component is typically implemented as a JavaScript class that has some state and a render method.
  ```
  class Tweet {
    state = {};
    render() {

    }
  }
  ```
    - The state here is the data that we want to display when the component is rendered.
    - render method as you can tell is responsible for describing what the UI should look like.
- The output of this render method is a react element, which is a simple plain JavaScript object that reacts to a DOM element.
- It's not a real DOM element, it's just a plain JavaScript object that represents the DOM element in memory.
- React keeps a lightweight representation of the DOM in memory which we refer to as the virtual DOM.
- Unlike the browser or the real DOM, this virtual DOM is cheap to create. 
- When we change the state of a component, we get a new react element.
- React will then compare this element and it's children with the previous one, it figures out what has changed, and then it will update a part of the real DOM to keep it in sync with the virtual DOM.
- So that means when building applications with React unlike vanilla JavaScript and query we no longer have to work with the DOM API in browsers. - In other words, we no longer have to write code in query or manipulate the DOM, or attach event handlers to DOM elements.
- You simply change the state of our components and React will automatically update the DOM to match that state.

## 02. Setting Up the Development Environment
### Install
- nodeJS for npm
- create react app
    ```
    ~$sudo npm i -g create-react-app@1.5.2
    ```
- Visual studio code
    - Extensions:
        - Simple React Snippets
        - Prettier