import { studentActions } from '../configs/StudentConfig';
import { registerStudentAction } from '../actions/Actions';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import studentReducer from '../reducers/StudentReducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
	it('should create an action to register a student', () => {
		const studentData = {
			id: 0,
			firstName: 'John',
			lastName: 'Appleseed',
			dob: '03/23/1987',
			mobile: '1234567890',
			birthMark: 'Mark',
		};
		const expectedActions = [
			{
				type: studentActions.ACTION_REGISTER_STUDENT,
				payload: studentData,
			},
		];
		const store = mockStore({ students: [] });
		store.dispatch(registerStudentAction(studentData));
		expect(store.getActions()).toEqual(expectedActions);
	});
});

describe('student reducer test', () => {
	it('should return the initial state', () => {
		expect(studentReducer(undefined, {})).toEqual([]);
	});

	it('should handle register student', () => {
		const studentData = {
			id: 0,
			firstName: 'John',
			lastName: 'Appleseed',
			dob: '03/23/1987',
			mobile: '1234567890',
			birthMark: 'Mark',
		};
		expect(studentReducer([], registerStudentAction(studentData))).toEqual(...[], [studentData]);
	});
});
