/* global window, __DEV__, __CLIENT__ */

import {
	createStore,
	applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import reducers from './rootReducers'

export default (req) => {

	const developmentMode = __DEV__ && __CLIENT__;
	const devToolsExtension = typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f;
	
	const store = createStore(
		reducers, 
		{}, 
		applyMiddleware(thunk),
		developmentMode && devToolsExtension
	);

  if (__DEV__ && module.hot) {
    module.hot.accept('./rootReducers', () => {
      const nextRootReducer = require('./rootReducers').default;
      store.replaceReducer(nextRootReducer);
    });
	}

	
	return store;
}