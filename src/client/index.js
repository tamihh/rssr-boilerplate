import 'babel-polyfill'
import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import Routes from '../common/routes/rootRoutes'
import reducers from '../common/store/rootReducers'
import { AppContainer } from 'react-hot-loader'
import App from '../common/components/containers/App/App';

const developmentMode = __DEV__ && __CLIENT__;
const devToolsExtension = typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f;

const store = createStore(
  reducers, 
  window.__INITIAL_STATE__, 
  applyMiddleware(thunk),
  developmentMode && devToolsExtension
)

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);

  

