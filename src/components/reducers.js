const { ADD_EMPLOYEE, ADD_PROJECT } = require("./actions");

const placeholderEmployees = [
  {
    id: 1,
    fname: "Shyam",
    lname: "Whitworth",
  },
  {
    id: 2,
    fname: "Ayla",
    lname: "Aguilar",
  },
  {
    id: 3,
    fname: "Sadie",
    lname: "Barnett",
  },
  {
    id: 6,
    fname: "Giovanni",
    lname: "Boyd",
  },
  {
    id: 5,
    fname: "Kathleen",
    lname: "Wells",
  },
];

const placeholderProjects = [
  { id: 1, number: 1, name: "project1", project_manager_id: 1 },
  { id: 2, number: 2, name: "project2", project_manager_id: 3 },
  { id: 3, number: 3, name: "project3", project_manager_id: 5 },
];

const projectsReducer = (state = placeholderProjects, action) => {
  switch (action.type) {
    case ADD_PROJECT: {
      const newState = [...state, action.project];
      return newState;
    }
    default:
      return state;
  }
};

const employeeReducer = (state = placeholderEmployees, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE: {
      const newState = [...state, action.employee];
      return newState;
    }
    default:
      return state;
  }
};

module.exports = {
  projectsReducer,
  employeeReducer,
};
