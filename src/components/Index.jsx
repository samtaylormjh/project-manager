import { useState } from "react";
import _, { find } from "lodash";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteEmployee, deleteProject } from "./actions";
import classnames from "classnames";
import {
  Button,
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col,
  Table,
} from "reactstrap";

function mapStateToProps(state) {
  return { employees: state.employees, projects: state.projects };
}

function Index(props) {
  let initialState = "1";
  if (props.location.search === "?tab=2") {
    initialState = "2";
  }

  const [activeTab, setActiveTab] = useState(initialState);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  let sortedEmployees = _.sortBy(props.employees, "id");

  return (
    <Container>
      {/* <StateForm /> */}
      <br />
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Employees
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Projects
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <br />
              <Link to="/employees/new">
                <Button color="primary" size="sm">
                  New Employee +
                </Button>
              </Link>
              <br />
              <br />
              <Table hover size="sm">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                  </tr>
                </thead>
                <tbody>
                  {_.map(sortedEmployees, (employee) => (
                    <Employee
                      key={employee.id}
                      employee={employee}
                      deleteEmployee={props.deleteEmployee}
                    />
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="10">
              <br />
              <Link to={"/projects/new"}>
                <Button color="primary" size="sm">
                  New Project +
                </Button>
              </Link>
              <br />
              <br />
              <Table hover size="sm">
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Project Manager</th>
                    <th>Number</th>
                  </tr>
                </thead>
                <tbody>
                  {_.map(props.projects, (project) => (
                    <Project
                      key={project.id}
                      project={project}
                      employees={props.employees}
                      deleteProject={props.deleteProject}
                    />
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </Container>
  );
}

export default connect(mapStateToProps, { deleteEmployee, deleteProject })(
  Index
);

const Employee = (props) => {
  const { employee } = props;

  return (
    <tr>
      <td>{employee.id}</td>
      <td>{employee.fname}</td>
      <td>{employee.lname}</td>
      {/* <td>{employee.project.join(", ")}</td> */}
      <td>
        <Link to={`employees/${employee.id}/edit`}>
          <Button size="sm">Edit</Button>
        </Link>{" "}
        <Button
          color="danger"
          size="sm"
          onClick={() => {
            props.deleteEmployee(employee);
          }}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

const Project = (props) => {
  const { project, employees } = props;

  const managers = _.map(project.project_manager_id, (manager) => {
    const findManager = _.find(employees, (e) => e.id == manager);
    if (findManager) {
      return `${findManager.fname} ${findManager.lname}`;
    }
  });

  return (
    <tr>
      <td>{project.name}</td>
      <td>{managers.join(", ")}</td>
      {/* <td>{managers.fname + " " + managers.lname + " "}</td> */}
      <td>{project.number}</td>
      <td>
        <Link to={`projects/${project.id}/edit`}>
          <Button size="sm">Edit</Button>
        </Link>{" "}
        <Button
          color="danger"
          size="sm"
          onClick={() => {
            props.deleteProject(project);
          }}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

// const StateForm = () => {
//   const add = (number1, number2) => {
//     return number1 + number2;
//   };

//   // console.log(add(1, 2));

//   return (
//     <div>
//       <input
//         type="text"
//         onChange={(e) => {
//           console.log(e.target.value);
//         }}
//       />
//     </div>
//   );
// };
