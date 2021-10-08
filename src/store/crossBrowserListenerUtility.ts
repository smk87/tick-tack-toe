// Library import
import { Store } from 'redux';
import { getStoredState, REHYDRATE } from 'redux-persist';

// eslint-disable-next-line
export const crossBrowserListener = (store: Store, persistConfig: any) => {
	return async (): Promise<void> => {
		const state = await getStoredState(persistConfig);

		store.dispatch({
			type: REHYDRATE,
			key: persistConfig.key,
			payload: state,
		});
	};
};
