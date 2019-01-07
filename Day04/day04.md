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
