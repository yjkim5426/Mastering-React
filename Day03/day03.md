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