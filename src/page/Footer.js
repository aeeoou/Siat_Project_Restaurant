import {Shop, PersonCircle, HouseFill} from 'react-bootstrap-icons';
import {Navbar, Container} from 'react-bootstrap'

const Footer = () => {
    return (
        <Navbar id='footer' className="NavbarFooter row text-center" sticky='bottom'>
            <Container>
                <Navbar.Brand href="#" id='footerIconShop'><Shop /></Navbar.Brand>
                <Navbar.Brand href="#"><PersonCircle id='footerIconPersonCircle'/></Navbar.Brand>
                <Navbar.Brand href="#"><HouseFill id='footerIconHouseFill'/></Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Footer