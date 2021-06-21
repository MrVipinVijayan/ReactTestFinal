import { studentActions } from '../configs/StudentConfig';

export const registerStudentAction = (studentData) => {
	return {
		type: studentActions.ACTION_REGISTER_STUDENT,
		payload: studentData,
	};
};
