import { cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import HomeRouterComponent from '../routes/HomeRouterComponent';
import DashboardComponent from '../pages/DashboardComponent';
import RegisterStudentComponent from '../pages/RegisterStudentComponent';
import StudentsListComponent from '../pages/ViewStudentListComponent';
import StudentComponent from '../components/StudentComponent';
import App from '../App';
import renderer from 'react-test-renderer';
import store from '../store';

import { appName } from '../configs/AppConfig';
import { Provider } from 'react-redux';

afterEach(cleanup);

test('render app screen without crash', () => {
	const root = document.createElement('div');
	ReactDOM.render(<App />, root);
});

test('render home component with title bar with app name and close button text', () => {
	const root = document.createElement('div');
	ReactDOM.render(<App />, root);
	expect(root.querySelector('nav').textContent).toBe(appName + 'X');
});

it('renders app correctly', () => {
	const tree = renderer.create(<App />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('renders home component correctly', () => {
	const tree = renderer.create(<HomeRouterComponent />).toJSON();
	expect(tree).toMatchSnapshot();
});

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
