import { combineReducers } from "redux";
import studentReducer from './StudentReducer'

const reducer  = combineReducers({
   students: studentReducer
});

export default reducer;