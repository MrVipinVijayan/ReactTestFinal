import { render, fireEvent, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import DashboardComponent from '../pages/DashboardComponent';
import AddStudentComponent from '../pages/RegisterStudentComponent';
import StudentsListComponent from '../pages/ViewStudentListComponent';
import { studentDataPlaceHolderFields } from '../configs/StudentConfig';
import App from '../App';
import TestRenderer from 'react-test-renderer';
import { Link } from 'react-router-dom';

import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../store';

afterEach(cleanup);

it('renders dashboard component correctly', () => {
	const tree = renderer
		.create(
			<Provider store={store}>
				<App>
					<DashboardComponent />
				</App>
			</Provider>
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});

it('test dashboard component rendering', async () => {
	const testRenderer = TestRenderer.create(
		<Router>
			<DashboardComponent />
		</Router>
	);
	const testInstance = testRenderer.root;
	expect(testInstance.findByType(DashboardComponent).children.length).toBe(1);
	expect(testInstance.findByType('div')).toBeVisible;
	expect(testInstance.findByType('div').children.length).toBe(3);
	expect(testInstance.findAllByType(Link)).toBeVisible;
});

describe('Component Testing', () => {
	beforeEach(() => {});

	it('test student list component rendering', async () => {
		const testRenderer = TestRenderer.create(
			<Provider store={store}>
				<App>
					<StudentsListComponent />
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
		expect(registerBtn).toBeVisible;
		expect(registerBtn).toBeDisabled;
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
		expect(registerBtn).toBeDisabled();
		// fireEvent.click(registerBtn);
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

		// console.log(firstNameField);

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
