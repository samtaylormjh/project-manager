import { combineReducers } from "redux";
import { projectsReducer, employeeReducer } from "./components/reducers";

export default combineReducers({
  projects: projectsReducer,
  employees: employeeReducer,
});
