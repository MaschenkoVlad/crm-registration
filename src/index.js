import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';
import thunk from 'redux-thunk';
import { reducer as formReducers } from "redux-form";
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import reducer from './actions/actions';

const rootReducer = combineReducers({
  form: formReducers,
  reducer: reducer
})

const compose = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, compose);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);