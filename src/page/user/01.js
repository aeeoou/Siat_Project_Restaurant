import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import {ChevronLeft} from 'react-bootstrap-icons';

const Login = () => {
    return (
        <Container id='loginContainer' className='border border-dark'>
            <Row className='text-center mt-4'>
                <Col>
                    <Row>
                        <Col className='mt-3 d-flex'>
                            <ChevronLeft/>
                        </Col>
                        <Col className='loginText mt-4'>
                            <p>로그인</p>
                        </Col>
                    </Row>
                    <Row>
                        <p>맛있당의 회원이 되어 다양한 서비스를 누리세요!</p>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Form className='loginForm'>
                    <Form.Group className="mb-3 mt-3"  controlId="formGroupEmail">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="email" placeholder="아이디를 입력하세요." className='h-25'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label><p className='float-end'></p>
                        <Form.Control type="password" placeholder="비밀번호를 입력하세요." className='h-25'  />
                    </Form.Group>
                    <Row>
                        <Col>
                            {['checkbox'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="아이디저장"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                </div>
                            ))}
                        </Col>
                        <Col>
                            <p className='d-inline'>아이디 찾기</p><p className='d-inline ms-2'>비밀번호 찾기</p>
                        </Col>
                    </Row> 
                </Form>
            </Row>
            <Row className='gap-3 mx-2 mb-5'>
                <Button variant='warning' size='lg' className='loginBtn mt-5 border border-dark' href='/'>로그인</Button>{' '}
                <Button variant='warning' size='lg' className='loginUpBtn border border-dark btn'>회원가입</Button>{' '}
            </Row>
        </Container>
    )
}

export default Login