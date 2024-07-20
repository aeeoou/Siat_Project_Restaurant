import Header from '../Header'
import Footer from '../Footer'
import {Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

{/* USER.03 회원가입 완료 */}
const CompleteMemRegistration = ({children}) => {
    return (
        <>
            <Container id='Container' className='border border-dark'>
                <Header/>
                    <div>
                        <main>
                            {children}
                            <div className='mt-5 text-center fw-bolder'>
                                <h3>회원 가입 완료</h3>
                                <hr/>
                                <div className='my-5'>회원가입이 성공적으로 완료되었습니다.</div>
                            </div>
                            <div className='d-flex justify-content-center my-5'>
                                <Link to='/login' className='d-block'>
                                    <a className='btn btn-primary btn-outline-warning p-2 btn-sm'
                                       href='#'
                                       role='button'
                                       style={{ background: 'orange' }}>로그인</a>
                                </Link>
                            </div>
                        </main>
                    </div>
                <Footer/>
            </Container>
        </>
    )
}

export default CompleteMemRegistration