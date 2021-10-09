// Library import
import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

// File import
import { crossBrowserListener } from './crossBrowserListenerUtility';
import { rootReducer } from './reducerCombine';

const persistConfig = {
	key: 'tick-tack-toe', // Store by this name
	storage, // Use localStorage
	stateReconciler: hardSet, // Reconcile level
	whilelist: [
		/**
		 * - Persist only those reducers
		 * - Reducer names here
		 */
	],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const persistedReducer = persistReducer(persistConfig, rootReducer as any);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);

window.addEventListener('storage', crossBrowserListener(store, persistConfig));

export * from './store.types';
