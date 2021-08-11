import { useState } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
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
                    <Employee key={employee.id} employee={employee} />
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

export default connect(mapStateToProps, {})(Index);

const Employee = (props) => {
  const { employee } = props;
  return (
    <tr>
      <td>{employee.id}</td>
      <td>{employee.fname}</td>
      <td>{employee.lname}</td>
      <td>
        <Link to={`/${employee.id}/edit`}>
          <Button size="sm">Edit</Button>
        </Link>{" "}
        <Button
          color="danger"
          size="sm"
          // onClick={() => {
          //   props.deleteTodo(employee);
          // }}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

const Project = (props) => {
  const { project, employees } = props;
  const manager_id = _.find(employees, (e) => {
    return e.id === project.project_manager_id;
  });

  return (
    <tr>
      <td>{project.name}</td>
      <td>{manager_id.fname + " " + manager_id.lname}</td>
      <td>{project.number}</td>
      <td>
        <Link to={`/${project.id}/edit`}>
          <Button size="sm">Edit</Button>
        </Link>{" "}
        <Button
          color="danger"
          size="sm"
          // onClick={() => {
          //   props.deleteTodo(employee);
          // }}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};
