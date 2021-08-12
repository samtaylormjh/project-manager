export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const addEmployee = (employee) => {
  return {
    type: ADD_EMPLOYEE,
    employee: employee,
  };
};

export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";
export const deleteEmployee = (employee) => {
  return {
    type: DELETE_EMPLOYEE,
    employee: employee,
  };
};

export const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";
export const updateEmployee = (employee) => {
  return {
    type: UPDATE_EMPLOYEE,
    employee: employee,
  };
};

export const ADD_PROJECT = "ADD_PROJECT";
export const addProject = (project) => {
  return {
    type: ADD_PROJECT,
    project: project,
  };
};

export const DELETE_PROJECT = "DELETE_PROJECT";
export const deleteProject = (project) => {
  return {
    type: DELETE_PROJECT,
    project: project,
  };
};
