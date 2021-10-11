// Library import
import { lazy } from 'react';

// File import
import { Route } from './routes.types';
import { urls } from './urls';

// Page components import
const Root = lazy(() => import('views/pages').then(({ Root }) => ({ default: Root })));

/**
 * Routes
 */
export const routes: Route = Object.freeze({
	ROOT_PAGE: {
		path: urls.ROOT(),
		component: Root,
	},
});
