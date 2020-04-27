import React from 'react';
import { Form, Col, Button, InputGroup} from 'react-bootstrap';

class DisplayForm extends React.Component{
  render()
  {
  return (
    <Form  onSubmit={this.props.handleFormSubmit} className="container  col-md-4 mt-4">

        <Form.Group controlId="validationCustom01">
          <Form.Label>Full name</Form.Label>
          <Form.Control required  type="text" value={this.props.name} name="name" onChange={this.props.handleInputChange} placeholder="Enter name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>


        <Form.Group controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control required type="email" value={this.props.email} name="email" onChange={this.props.handleInputChange} placeholder="Enter email" />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>


        <Form.Group controlId="validationCustom03">
          <Form.Label>Medicine Name</Form.Label>
          <Form.Control type="text" value={this.props.medicine} name="medicine" onChange={this.props.handleInputChange} placeholder="Medicine" required />
          <Form.Control.Feedback type="invalid">
            Please provide a Medicine name.
          </Form.Control.Feedback>
        </Form.Group>


        <Form.Row>

        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" value={this.props.age} name="age" onChange={this.props.handleInputChange} placeholder="DOB" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>


        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" placeholder="Country Name" name="country" value={this.props.country} onChange={this.props.handleInputChange}  required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>

      </Form.Row>

      <Button type="submit"  className="d-flex mx-auto">Submit form</Button>
    </Form>
  );
}
}

export default DisplayForm;