import { cleanup } from '@testing-library/react';
import HomeRouterComponent from '../routes/HomeRouterComponent';
import DashboardComponent from '../pages/DashboardComponent';
import RegisterStudentComponent from '../pages/RegisterStudentComponent';
import StudentsListComponent from '../pages/ViewStudentListComponent';
import StudentComponent from '../components/StudentComponent';
import App from '../App';
import renderer from 'react-test-renderer';
import store from '../store';

import configureMockStore from 'redux-mock-store';

import { Provider } from 'react-redux';

const mockStore = configureMockStore();

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

it('renders home router component correctly', () => {
	const tree = renderer
		.create(
			<Provider store={store}>
				<App>
					<HomeRouterComponent />
				</App>
			</Provider>
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});

it('renders add student component correctly', () => {
	const tree = renderer
		.create(
			<Provider store={store}>
				<App>
					<RegisterStudentComponent />
				</App>
			</Provider>
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});

it('renders view students component correctly', () => {
	const tree = renderer
		.create(
			<Provider store={store}>
				<App>
					<StudentsListComponent />
				</App>
			</Provider>
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});

it('renders student component correctly', () => {
	const tree = renderer
		.create(
			<Provider store={store}>
				<App>
					<StudentComponent />
				</App>
			</Provider>
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
