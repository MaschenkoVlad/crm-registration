import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';
import thunk from 'redux-thunk';
import { reducer as formReducers } from "redux-form";
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import {reducer, fetchAllData } from './actions/actions';

const rootReducer = combineReducers({
  form: formReducers,
  reducer: reducer
})
// redux-thunk для обработки AJAX или сетевых запросов через redux
const compose = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, compose);

store.dispatch(fetchAllData());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);