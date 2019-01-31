import React, { createContext } from 'react';

const CounterContext = createContext();

const withCount = (render) => {
  class Wrapper extends React.Component {
    render() {
      let children = render();
      children = React.createElement(CounterContext.Consumer, null, () => children);
      return children;
    }
  }

  return Wrapper;
}

const Counter = withCount(() => {
  return <div>1</div>;
});

class Blank extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return this.props.children;
  }
}

const App = () => {

  return (
    <CounterContext.Provider value={1}>
      <div>
        <Blank>
          <Counter />
        </Blank>
      </div>
    </CounterContext.Provider>
  );
}


export default App;
