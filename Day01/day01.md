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

## 03. Your First React App
### create react app
```
$create-react-app react-app
```
- It is going to install React as well as all the third party libraries we need
- It's going to install a light weight development server, web pack for bundling our files, Babel for comiling our JavaScript code, as well as a bunch of other tools.
- when you create an application using create react app you don't have to do any configuration, all the configuration is done for you.
- If you wnat to customize this configuration for your production environment, you can always eject by running npm run eject.
    ```
    npm run eject
      ```
- Launch a development server
    ```
    $cd react-app
    $npm start
    ```
- Folder structure:
    - node_module: is where we have all the third party libraries as well as react itself, we never have to touch this.
    - public: where we have the public assets of our application. Such as a favorite icon, and index.html
    - src: where we have a basic component.
- JSX: which stands for JavaScript XML to describe what the UI is going to look like. this mark up represents the output of our app component.
- To make JSX code work, we have to pass this code through Babel, which is a modern JavaScript compiler.
- Babel will take this JSX syntax, and convert it to plain JavaScript code that broswers can understand.
    - [babeljs.io.repl] babeljs.io.
- index.js: is the entry point for our application

## 04. Hello World
### 
- delete all the files inside of the src folder, you're going to write everything from scratch.

- import module
    ```
    import React from 'react';
    ```
    import {Object that we're importing} from {'module'}
    // 'react' <- this is the module
    // React <- this is the obejct that we're importing from that module.
- Babel will compile JSX down to a call to React.create element, and this is the reason why we have to import react on the top even though we are not going to directly use this object in our code. But when our code is compiled, because there is a reference to React that's why we have to import it on the top.
- render
    ```
    ReactDOM.render(element, document.getElementById('root'));
    ```
    - as a first argument we pass the element we want to render
    - as a second argument, we need to specify where in the real DOM we want to render this.