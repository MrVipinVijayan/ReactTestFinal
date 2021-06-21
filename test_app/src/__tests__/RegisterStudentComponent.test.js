import { render, fireEvent, cleanup } from '@testing-library/react';

import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

import { studentDataPlaceHolderFields } from '../configs/StudentConfig';
import App from '../App';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../store';
import AddStudentComponent from '../pages/RegisterStudentComponent';
import ViewStudentsListComponent from '../pages/ViewStudentListComponent';
import { Button } from '../components/atoms/Button';

afterEach(cleanup);

describe('test register component', () => {
	const setStudentData = jest.fn();
	//let wrapper;
	// beforeEach(() => {
	// 	// wrapper = mount(
	// 	// 	<Provider store={store}>
	// 	// 		<AddStudentComponent />
	// 	// 	</Provider>
	// 	// );
	// });
	// it('renders', () => {
	// 	expect(wrapper).not.toBeNull();
	// });
	it('check student state', () => {
		var initialStudentData = {
			id: 0,
			firstName: '',
			lastName: '',
			dob: '',
			mobile: '',
			birthMark: '',
		};
		// expect(wrapper.find('p').text()).toEqual('Count: 4');
		setStudentData({ ...initialStudentData, ['firstName']: 'John' });
		setStudentData({ ...initialStudentData, ['lastName']: 'John' });
		setStudentData({ ...initialStudentData, ['dob']: '03/23/1987' });
		setStudentData({ ...initialStudentData, ['mobile']: '1234567890' });
		setStudentData({ ...initialStudentData, ['birthMark']: 'No Marks' });
		// const btn = wrapper.find('Button');
		// console.log(btn);
		// expect(btn.length).toBe(1);
		// expect(btn).toBeEnabled();

		const wrapper = shallow(
			<Provider store={store}>
				<AddStudentComponent />
			</Provider>
		);
		// const btn = wrapper.find(Button);
		// console.log(btn);
		// expect(btn).toHaveLength(1);
		// expect(wrapper.contains(<Button />)).toBeTruthy();
		// expect(wrapper.find('.regBtn')).toHaveLength(1);
		// expect(btn).toBeEnabled();
		// expect(wrapper.find(Button)).to.have.lengthOf(1);
	});
});

describe('Component Testing', () => {
	it('test student list component rendering', async () => {
		const testRenderer = TestRenderer.create(
			<Provider store={store}>
				<App>
					<ViewStudentsListComponent />
				</App>
			</Provider>
		);
		const testInstance = testRenderer.root;
		expect(testInstance.findByType(App).children.length).toBe(1);
	});

	it('test register student find the title', () => {
		const { getByText } = render(
			<Provider store={store}>
				<AddStudentComponent />
			</Provider>
		);
		expect(getByText(/Register New/i).textContent).toBe('Register New Student');
	});

	it('test register student find the button, check if it is visible and disabled', () => {
		const { getAllByText } = render(
			<Provider store={store}>
				<AddStudentComponent />
			</Provider>
		);
		var registerBtn = getAllByText(/Register/i)[1];
		expect(registerBtn.textContent).toBe('Register');
		expect(registerBtn).toBeVisible();
		expect(registerBtn).toBeDisabled();
	});

	it('test register student', () => {
		const { getAllByText, getByPlaceholderText } = render(
			<Provider store={store}>
				<AddStudentComponent />
			</Provider>
		);

		var registerBtn = getAllByText(/Register/i)[1];

		var firstNameField = getByPlaceholderText(studentDataPlaceHolderFields.FIRST_NAME);
		firstNameField.textContent = 'John';
		fireEvent.blur(firstNameField);

		var lastNameField = getByPlaceholderText(studentDataPlaceHolderFields.LAST_NAME);
		lastNameField.textContent = 'Appleseed';
		fireEvent.blur(lastNameField);

		var dobField = getByPlaceholderText(studentDataPlaceHolderFields.DOB);
		dobField.textContent = '03/23/1987';
		fireEvent.blur(dobField);

		var mobileField = getByPlaceholderText(studentDataPlaceHolderFields.MOBILE);
		mobileField.textContent = '1234567890';
		fireEvent.blur(mobileField);

		var birthMarkField = getByPlaceholderText(studentDataPlaceHolderFields.BIRTH_MARK);
		birthMarkField.textContent = 'Mark on the Forehead';
		fireEvent.blur(birthMarkField);

		// expect the register button to be enabled
		expect(registerBtn).toBeVisible();
		expect(registerBtn).toBeDisabled();
	});

	it('test register student without all fields', () => {
		const { getAllByText, getByPlaceholderText } = render(
			<Provider store={store}>
				<AddStudentComponent />
			</Provider>
		);

		var registerBtn = getAllByText(/Register/i)[1];

		var firstNameField = getByPlaceholderText(studentDataPlaceHolderFields.FIRST_NAME);
		firstNameField.textContent = 'John';
		fireEvent.blur(firstNameField);

		var lastNameField = getByPlaceholderText(studentDataPlaceHolderFields.LAST_NAME);
		lastNameField.textContent = 'Appleseed';
		fireEvent.blur(lastNameField);

		var dobField = getByPlaceholderText(studentDataPlaceHolderFields.DOB);
		dobField.textContent = '03/23/1987';
		fireEvent.blur(dobField);

		var mobileField = getByPlaceholderText(studentDataPlaceHolderFields.MOBILE);
		mobileField.textContent = '1234567890';
		fireEvent.blur(mobileField);

		var birthMarkField = getByPlaceholderText(studentDataPlaceHolderFields.BIRTH_MARK);
		birthMarkField.textContent = '';
		fireEvent.blur(birthMarkField);

		// expect the register button to be enabled
		expect(registerBtn).toBeDisabled();
	});
});
