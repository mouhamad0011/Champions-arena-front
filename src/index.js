import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import {thunk} from "redux-thunk";
import allReducers from './redux/reducers';

const store = createStore(allReducers, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(store.getState())
root.render(
  <React.StrictMode>
   <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

