import {Button, Offcanvas, Navbar, Container} from 'react-bootstrap'
import {Justify} from 'react-bootstrap-icons'
import { useState } from 'react';

const NavOffcanvas = () => {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="ms-2 ">
                <Justify className='fs-3' href='/'/>
            </Button>
            <Offcanvas show={show} onHide={handleClose}  placement='end' className='offCanvasStandard'>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title className='fs-2'>맛있당</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='text-center fw-bold'>-여기 맛있당-</div>
                    <Navbar className="ms-4 mt-2">
                        <Container>
                        <Navbar.Brand href="/login">로그인</Navbar.Brand>
                        </Container>
                    </Navbar>
                    <br />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default NavOffcanvas