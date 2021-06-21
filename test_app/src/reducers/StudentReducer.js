import { studentActions } from '../configs/StudentConfig';

const initialState = [];

const studentReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case studentActions.ACTION_REGISTER_STUDENT:
			return [
				...state,
				{
					id: payload.id,
					firstName: payload.firstName,
					lastName: payload.lastName,
					dob: payload.dob,
					mobile: payload.mobile,  
					birthMark: payload.birthMark,
				},
			];
		default:
			return state;
	}
};

export default studentReducer;
