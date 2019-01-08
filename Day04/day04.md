# Day 04 - Composing Components
## 01. Introduction
###
- Pass Data: how to pass the data between your components
- Raise and Handle Events: how to raise and handle events
- Multiple Components in Sync: how to have multiple components that are in sync
- Functional Components
- Lifecycle Hooks

## 02. Composing Components
###
```
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0, },
      { id: 2, value: 0, },
      { id: 3, value: 0, },
      { id: 4, value: 0, },
    ]
  }
  render() { 
    return (
      <div>
        { this.state.counters.map((counter) => <Counter key={counter.id}/>)}
      </div>
    );
  }
}
```

## 03. Passing Data to Components
###
- Every React component has a property called props that is plain JavaScript object, that includes all the attributes that we set in counters component.
```
<Counter key={counter.id} value={counter.value}/>
state = {
  count: this.props.value,
};
```

## 04. Passing Children
###
- The attributes that we set here are passed to our component using a single JavaScript object called props. We use it when we want to pass something between the opening and closing
- props.children: pass complex elements to a child component such as a dialogue box
  ```
  return (
      <div>
        { this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value}>
            <h4>this is props.children</h4>
            <h3>Counter ID: {counter.id}</h3>
          </Counter>
        ))}
      </div>
    );

    render() { 
      return (
        <div>
          {this.props.children}
        </div>
      );
    }
  ```

## 05. Debugging React Apps
### tools for debugging React application
- tab React: on this panel we can see the tree of our components.
- $r: type '$r' in console. we get the instance of our first counter component. We can work with the instance of any components on our page.

## 06. Props vs State
###
- props: data that we give to a component. props is read only. We should not modify the input. If you need to modify that input during the lifecycle of a component, then we need that input and put it in the state.
- state:data that is local or private to that component. Other components cannot access that state. It's completely internal to that component.

## 07. Raising and Handling Events
###
- The component that owns a piece of the state, should be the one modifying it.
- Raising event
    - We need to add a new method to our counters component, and pass a reference to that method via props to the counter component.
```
handleDeleteCounter = () => {
    console.log('onDelete event handler called');
  }

  render() { 
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter 
            key={counter.id} 
            value={counter.value} 
            id={counter.id} 
            onDelete={this.handleDeleteCounter}/>
        ))}
      </div>
    );
  }
```

## 08. Updating the State
###
- with parameter use arrow function
```
<button 
  className="btn btn-danger btn-sm m-2"
  onClick={() => this.props.onDelete(this.props.id)}>
  Delete
</button>
```
- update the state: in React we do not update the state directly, in other words, we are not going to remove a counter from the array, instead, we're going to create a new array without a given counter, and then call the setState method of our component, and let react update the state.
- create filtered new counters array
```
const counters = this.state.counters.filter(c => c.id !== counterId);
```
- override the counters property with the counters
```
this.setState({
  counters
})
```
- encapsulate related values
```
{this.state.counters.map(counter => (
  <Counter 
    key={counter.id} 
    value={counter.value} 
    id={counter.id} 
    onDelete={this.handleDeleteCounter}/>
))}
```
```
<div>
  {this.state.counters.map(counter => (
    <Counter 
      key={counter.id} 
      counter={counter}
      onDelete={this.handleDeleteCounter}/>
  ))}
</div>
```

## 09. Single Source of Truth
###
- Add a reset button
```
{this.state.counters.map((counter) => {
  return <Counter 
    key={counter.id} 
    counter={counter}
    onDelete={this.handleDeleteCounter}/>
})}

{this.state.counters.map(counter => (
  <Counter 
    key={counter.id} 
    counter={counter}
    onDelete={this.handleDeleteCounter}/>
))}
```
```
handleResetCounters = () => {
  const counters = this.state.counters.map(function (counter){
    counter.value = 0;
    return counter;
  })
  this.setState({ counters })
}
```

## 10. Removing the local state
###
- single source of truth: We need to remove the local state in our couunter component and have a single source of truth.
- A control kind of component. Controlled component, doesn't have it's own local state, it receives all the data via props and raises events whenever data needs to be changed. So this component is entirely controlled by it's parent.
- Delete local state
- next, we need to find any references to this.state and update them accordingly. The first reference is in our handle increment method. Delete increment method.
- change onclick event on button to raised event
```
onClick={() => this.props.onIncrement(this.props.counter)}
```