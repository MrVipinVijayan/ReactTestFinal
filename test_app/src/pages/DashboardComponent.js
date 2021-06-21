import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/atoms/Button';
import { routePaths } from '../configs/AppConfig';

const DashboardComponent = () => {
	return (
		<div>
			<Link to={routePaths.PATH_REG_STUDENT}>
				<Button>Register Student</Button>
			</Link>
			&nbsp; &nbsp;
			<Link to={routePaths.PATH_VIEW_STUDENTS}>
				<Button>View Students</Button>
			</Link>
		</div>
	);
};

export default DashboardComponent;
