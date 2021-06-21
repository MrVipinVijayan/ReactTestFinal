import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/atoms/Button';
import { studentDataFields, studentDataPlaceHolderFields } from '../configs/StudentConfig';
import { routePaths } from '../configs/AppConfig';
import { isEmpty, isValidDOB, isValidMobileNumber } from '../utils/Utils';
import { registerStudentAction } from '../actions/Actions';
import StudentRegInputField from '../components/StudentRegInputField';

const RegisterStudentComponent = () => {
	const initialStudentData = {
		id: uuidv4(),
		firstName: '',
		lastName: '',
		dob: '',
		mobile: '',
		birthMark: '',
	};

	const errorData = { fieldName: undefined };

	const dispatch = useDispatch();
	const history = useHistory();

	const [studentData, setStudentData] = useState(initialStudentData);
	const [error, setError] = useState(errorData);

	const handleOnChange = (e) => {
		setStudentData({ ...studentData, [e.target.name]: e.target.value });
	};

	const doRegisterStudent = () => {
		dispatch(registerStudentAction(studentData));
		goToViewStudents();
	};

	const goToViewStudents = () => {
		history.replace(routePaths.PATH_VIEW_STUDENTS);
	};

	const isRegistrationButtonDisabled = () =>
		studentData.firstName === '' ||
		studentData.lastName === '' ||
		studentData.dob === '' ||
		studentData.mobile === '';

	const clearError = () => setError({ ...error, fieldName: undefined });

	const isValidField = (e) => {
		const fieldName = e.target.name;
		const value = e.target.value;
		switch (fieldName) {
			case studentDataFields.FIRST_NAME:
			case studentDataFields.LAST_NAME:
				if (isEmpty(value)) {
					setError({ ...error, fieldName });
					return;
				}
				clearError();
				break;
			case studentDataFields.DOB:
				if (!isValidDOB(value)) {
					setError({ ...error, fieldName });
					return;
				}
				clearError();
				break;
			case studentDataFields.MOBILE:
				if (!isValidMobileNumber(value)) {
					setError({ ...error, fieldName });
					return;
				}
				clearError();
				break;
			default:
				break;
		}
	};

	return (
		<div>
			<br />
			<div className="center">
				<p>Register New Student</p>
				<StudentRegInputField
					name={studentDataFields.FIRST_NAME}
					placeholder={studentDataPlaceHolderFields.FIRST_NAME}
					value={studentData.firstName}
					handleOnChange={handleOnChange}
					validateField={isValidField}
					errorText={'Please enter First Name'}
					isError={error.fieldName === studentDataFields.FIRST_NAME}
				/>
				<StudentRegInputField
					name={studentDataFields.LAST_NAME}
					value={studentData.lastName}
					placeholder={studentDataPlaceHolderFields.LAST_NAME}
					handleOnChange={handleOnChange}
					validateField={isValidField}
					errorText={'Please enter Last Name'}
					isError={error.fieldName === studentDataFields.LAST_NAME}
				/>
				<StudentRegInputField
					name={studentDataFields.DOB}
					value={studentData.dob}
					placeholder={studentDataPlaceHolderFields.DOB}
					handleOnChange={handleOnChange}
					validateField={isValidField}
					errorText={'Please enter your DOB'}
					isError={error.fieldName === studentDataFields.DOB}
				/>
				<StudentRegInputField
					name={studentDataFields.MOBILE}
					value={studentData.mobile}
					placeholder={studentDataPlaceHolderFields.MOBILE}
					handleOnChange={handleOnChange}
					validateField={isValidField}
					errorText={'Please enter your mobile number'}
					isError={error.fieldName === studentDataFields.MOBILE}
				/>
				<StudentRegInputField
					name={studentDataFields.BIRTH_MARK}
					placeholder={studentDataPlaceHolderFields.BIRTH_MARK}
					value={studentData.birthMark}
					handleOnChange={handleOnChange}
					validateField={isValidField}
					errorText={'Please enter your Birth Mark'}
					isError={error.fieldName === studentDataFields.BIRTH_MARK}
				/>
				<Button className="regBtn" disabled={isRegistrationButtonDisabled()} onClick={doRegisterStudent}>
					Register
				</Button>
			</div>
		</div>
	);
};

export default RegisterStudentComponent;
