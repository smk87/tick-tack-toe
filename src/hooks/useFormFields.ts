import { Dispatch, SetStateAction, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useFormFields = <T>(initialState: T): [T, (event: any) => void, Dispatch<SetStateAction<T>>] => {
	const [fields, setValues] = useState<T>(initialState);

	return [
		fields,
		(event) => {
			setValues({
				...fields,
				[event.target.name]: event.target.value,
			});
		},
		setValues,
	];
};
