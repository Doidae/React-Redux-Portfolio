import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function TopBar(){
    return (
        <Navbar expand="lg" className='bg-body-tertiary'>
            <Container>
                <Navbar.Brand href='#home'>Andy C Arredondo</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='me-auto'>
                        <Nav.Link href='Home'>Home</Nav.Link>
                        <Nav.Link href='AboutMe'>About Me</Nav.Link>
                        <NavDropdown title='Projects' id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1"> Space Invaders</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Bread DataBase</NavDropdown.Item>
                            
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
} 