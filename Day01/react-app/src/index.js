// import a couple of objects from react modules

// 'react' <- this is the module
// React <- this is the obejct that we're importing from that module.
import React from 'react';
import ReactDOM from 'react-dom';

//define element
const element = <h1>Hello World</h1>;

// as a first argument we pass the element we want to render
// as a second argument, we need to specify where in the real DOM we want to render this.
ReactDOM.render(element, document.getElementById('root'));
