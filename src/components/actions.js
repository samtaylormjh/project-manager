export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const addEmployee = (employee) => {
  return {
    type: ADD_EMPLOYEE,
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
