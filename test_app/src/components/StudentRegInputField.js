import React from 'react';
import { StyledInput } from './atoms/Input';

const StudentRegInputField = (props) => {
	return (
		<div>
			<StyledInput
				name={props.name}
				placeholder={props.placeholder}
				value={props.value}
				onChange={(e) => props.handleOnChange(e)}
				onBlur={props.validateField}
			/>
			{props.isError && <label className="error"> {props.errorText}</label>}
		</div>
	);
};

export default StudentRegInputField;
