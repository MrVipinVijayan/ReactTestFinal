import React from 'react';
import { minorAge } from '../utils/Constants';
import { getAge } from '../utils/Utils';

const StudentComponent = (props) => {
	const student = props.student;

	const getName = () => {
		return student.lastName + ', ' + student.firstName;
	};

	const getAgeRow = () => {
		var age = getAge(student.dob);
		return age < minorAge ? age + ' Yrs (Minor)' : age + ' Yrs';
	};

	return (
		<tr>
			<td> {getName()} </td>
			<td> {getAgeRow()} </td>
			<td> {student.mobile} </td>
		</tr>
	);
};

export default StudentComponent;
