import { Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import pearLogo from "../img/pear_logo.png"

export default function TopBar() {
    return(
        <Navbar bg="light">
            <Container>
                <Navbar.Brand href="">
                    <img alt="pear" src={pearLogo} width="25" height="30" className='d-inline-block align top'/>
                    {"  "}
                    QwikCart
                </Navbar.Brand>
                <Navbar.Collapse className='justify-content-end'>
                    <Nav>
                        <Nav.Link>Log In</Nav.Link>
                    </Nav>
                    <Button variant='success'>Sign Up</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
