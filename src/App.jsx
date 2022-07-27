import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import Counter from './Counter.jsx';
import './index.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export default App;