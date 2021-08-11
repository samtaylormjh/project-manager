import { Field } from "react-final-form";
import { Container, FormGroup, Label, Input, Col, Button } from "reactstrap";

const required = (value) => (value ? undefined : "Required");

const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

export default function employeeForm(props) {
  return (
    <div>
      <Container>
        <FormGroup row>
          <Label for="fname" sm={2}>
            First Name
          </Label>
          <Col sm={3}>
            <Field
              component={InputField}
              name="fname"
              label="First Name"
              validate={composeValidators(required)}
            />
          </Col>
        </FormGroup>
        <br />
        <FormGroup row>
          <Label for="lname" sm={2}>
            Last Name
          </Label>
          <Col sm={3}>
            <Field
              component={InputField}
              name="lname"
              label="Last Name"
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
