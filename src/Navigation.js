import React,{Component} from 'react';
import { Navbar} from 'react-bootstrap';
// import {Nav, NavDropdown, Form,  FormControl, Button} from 'react-bootstrap';


class Navigation extends Component{
  render(){
  return(
<Navbar bg="dark" expand="md">
  <Navbar.Brand href="#">DK Editable Table and Form</Navbar.Brand>
  
  {/* <Navbar.Toggle/>
  <Navbar.Collapse>
    <Nav className="mr-auto" >
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" bg="dark" placeholder="Search" className="mr-sm-2 chan" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
   */}
</Navbar>
)
}
}

export default Navigation;
