// Library imports
import { useDispatch } from 'react-redux';

// File imports
import { dispatchers, Menu } from 'store/menu';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useChangeMenu = () => {
	const dispatch = useDispatch();

	const changeMenu = (menu: Menu) => {
		dispatch(dispatchers.changeMenu({ menu }));
	};

	return changeMenu;
};
