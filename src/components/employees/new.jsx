import { addEmployee } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Container } from "reactstrap";
import { Form } from "react-final-form";
import EmployeeForm from "./form";

function mapStateToProps(state) {
  return { employees: state.employees };
}

function NewEmployee(props) {
  const handleSubmit = (values) => {
    const ids = props.employees.map((e) => e.id);
    values.id = Math.max(...ids) + 1;
    props.addEmployee(values);
    props.history.push("/");
  };

  return (
    <Container>
      <br />
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to={"/"}>Employees</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active tag="span">
          New Employee
        </BreadcrumbItem>
      </Breadcrumb>
      <br />
      <Form component={EmployeeForm} onSubmit={handleSubmit} />
    </Container>
  );
}

export default connect(mapStateToProps, { addEmployee })(NewEmployee);
