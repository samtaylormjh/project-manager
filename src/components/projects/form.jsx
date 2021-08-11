import { Field } from "react-final-form";
import { Container, FormGroup, Label, Input, Col, Button } from "reactstrap";
import Select from "react-select";

const required = (value) => (value ? undefined : "Required");

const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

export default function projectForm(props) {
  console.log(props);

  const options = [
    { value: "", label: "" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div>
      <Container>
        <FormGroup row>
          <Label for="name" sm={2}>
            Name
          </Label>
          <Col sm={3}>
            <Field
              component={InputField}
              name="name"
              label="Project Name"
              validate={composeValidators(required)}
            />
          </Col>
        </FormGroup>
        <br />
        <FormGroup row>
          <Label for="project_manager_id" sm={2}>
            Project Manager
          </Label>
          <Col sm={3}>
            <Field
              component={selectField}
              name="project_manager_id"
              label="Project Manager"
              options={options}
              validate={composeValidators(required)}
            />
          </Col>
        </FormGroup>
        <br />
        <Button type="submit" onClick={props.handleSubmit}>
          Submit
        </Button>
      </Container>
    </div>
  );
}

const InputField = (props) => {
  const { input, meta } = props;
  return (
    <div>
      <FormGroup>
        <Input
          valid={meta.touched && meta.valid}
          invalid={meta.touched && meta.invalid}
          {...input}
          type="text"
          placeholder={props.label}
        />
      </FormGroup>
    </div>
  );
};

const selectField = (props) => {
  const { input, meta } = props;
  return (
    <div>
      <FormGroup>
        <Select options={props.options} />
      </FormGroup>
    </div>
  );
};
