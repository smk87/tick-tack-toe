type UrlValue = (id?: string) => string;

export interface Url {
	readonly [key: string]: UrlValue;
}

interface RouteObject {
	path: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	component?: React.ComponentType<any>;
}

export interface Route {
	readonly [key: string]: RouteObject;
}
