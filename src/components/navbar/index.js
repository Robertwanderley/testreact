import React, { Component } from 'react';
import { Nav,Navbar,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Headers extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant='dark' expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to={"/"}>Logo</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                                <Nav.Link as={Link} to={"/Contato"}>Contato</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
