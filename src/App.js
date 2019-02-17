import React, { Component } from 'react';
import './App.css';
import Main from './Main';

//redux
import { Provider } from 'react-redux';
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Main/>
        </div>
      </Provider>
    );
  }
}

export default App;
