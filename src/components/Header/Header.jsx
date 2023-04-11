import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">CareerBuilder</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 nav-link"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link  to='/'>Home</Link>
                            <Link  to='/appliedJobs'>Applied Jobs</Link>
                            <Link  to='/statistics'>Statistics</Link>
                            <Link  to='/blog'>Blog</Link>
                        </Nav>
                            <Button variant="primary">Start Applying</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default Header;