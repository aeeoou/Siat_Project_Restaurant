import Header from '../Header'
import Footer from '../Footer'
import {Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

{/* ADMIN.USER.03 회원삭제완료 */}
const CompleteMemDelete = ({children}) => {
    return (
        <>
            <Container id='Container' className='border border-dark'>
                <Header/>
                    <div>
                        <main>
                            {children}
                            <div className='mt-5 text-center fw-bolder'>
                                <h3>회원 삭제 완료</h3>
                                <hr/>
                                <div className='my-5'>회원삭제가 정상적으로 처리되었습니다.</div>
                            </div>
                            <div className='d-flex justify-content-center my-5'>
                                <Link to='/MemListInquiry' className='d-block'>
                                    <a className='btn btn-primary btn-outline-warning p-2 btn-sm'
                                       href='#'
                                       role='button'
                                       style={{ background: 'orange' }}>회원목록화면 바로가기</a>
                                </Link>
                            </div>
                        </main>
                    </div>
                <Footer/>
            </Container>
        </>
    )
}

export default CompleteMemDelete