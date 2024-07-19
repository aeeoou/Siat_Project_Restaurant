import {Link} from 'react-router-dom'
import {Row, Col, Button} from 'react-bootstrap'
import {Justify} from 'react-bootstrap-icons' 

const Header = () => {
    return (
        <header>
            <Row id='header'>
                <Col className='logo'>
                    <div className='logo_img bg-light d-flex align-items-center justify-content-center '>
                        <div>로고이미지</div>
                    </div>
                </Col>
                <Col className='mt-3'>
                    <Link to={'/'}>
                        <Justify className='float-end ms-3 fs-1 text-dark'/>
                    </Link>
                    <Link to={'/login'}>
                        <Button className='float-end' id='login'>로그인</Button>
                    </Link>  
                </Col>
            </Row>
        </header>
    )
}

export default Header