import React from 'react';
import StudentComponent from '../components/StudentComponent';
import NoStudentsComponent from '../components/NoRegisteredStudent';
import { useSelector } from 'react-redux';

const ViewStudentsListComponent = () => {
	const students = useSelector((state) => state.students);

	return students.length === 0 ? (
		<NoStudentsComponent />
	) : (
		<div>
			<p></p>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Age</th>
						<th>Mobile</th>
					</tr>
				</thead>
				<tbody>
					{students.map((student) => (
						<TableRow key={student.id} student={student} />
					))}
				</tbody>
			</table>
		</div>
	);
};

const TableRow = (props) => {
	var student = props.student;
	return <StudentComponent student={student} />;
};

export default ViewStudentsListComponent;
