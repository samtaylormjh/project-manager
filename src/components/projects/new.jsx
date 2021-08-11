import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Container } from "reactstrap";
import { Form } from "react-final-form";
import projectForm from "./form";
import { addProject } from "../actions";

function mapStateToProps(state) {
  return { projects: state.projects, employees: state.employees };
}

function NewProject(props) {
  const handleSubmit = (values) => {
    console.log(values);
    const ids = props.projects.map((p) => p.id);
    values.id = Math.max(...ids) + 1;
    props.addProject(values);
    props.history.push("/");
  };

  return (
    <Container>
      <br />
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to={"/?tab=2"}>Projects</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active tag="span">
          New Project
        </BreadcrumbItem>
      </Breadcrumb>
      <br />
      <Form
        component={projectForm}
        onSubmit={handleSubmit}
        employees={props.employees}
      />
    </Container>
  );
}

export default connect(mapStateToProps, { addProject })(NewProject);
