import React from 'react';
import ViewStudentsListComponent from '../pages/ViewStudentListComponent';
import RegisterStudentComponent from '../pages/RegisterStudentComponent';
import DashboardComponent from '../pages/DashboardComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routePaths } from '../configs/AppConfig';

const HomeRouterComponent = () => {
	return (
		<Router>
			<Switch>
				<Route path={routePaths.PATH_HOME} exact component={DashboardComponent} />
				<Route path={routePaths.PATH_REG_STUDENT} exact component={RegisterStudentComponent} />
				<Route path={routePaths.PATH_VIEW_STUDENTS} exact component={ViewStudentsListComponent} />
			</Switch>
		</Router>
	);
};

export default HomeRouterComponent;
