import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Container } from "reactstrap";
import { Form } from "react-final-form";
import ProjectForm from "./form";
import { addProject } from "../actions";

function mapStateToProps(state) {
  return { projects: state.projects, employees: state.employees };
}

function NewProject(props) {
  const handleSubmit = (values) => {
    const ids = props.projects.map((p) => p.id);
    values.id = Math.max(...ids) + 1;

    const project_num = props.projects.map((p) => p.id);
    values.number = Math.max(...project_num) + 1;

    values.project_manager_id = values.project_manager_id.value;

    props.addProject(values);
    props.history.push("/?tab=2");
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
        component={ProjectForm}
        onSubmit={handleSubmit}
        employees={props.employees}
      />
    </Container>
  );
}

export default connect(mapStateToProps, { addProject })(NewProject);
