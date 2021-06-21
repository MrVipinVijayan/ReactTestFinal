import { dob_pattern, mobile_no_pattern } from './Constants';

// Checks if a value is Empty
export const isEmpty = (value) => undefined === value || value.trim() === '';

// Checks if a DOB  is in valid  DD/MM/YYY format
export const isValidDOB = (value) => (value.trim().match(dob_pattern) ? true : false);

// Checks of a Mobile Number is valid
export const isValidMobileNumber = (value) => (value.trim().match(mobile_no_pattern) ? true : false);

// Return the age based on the Birth Date
export const getAge = (value) => Math.floor((new Date() - new Date(value).getTime()) / 3.15576e10);
