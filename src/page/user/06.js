import Header from '../Header'
import Footer from '../Footer'
import {Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

{/* USER.06 회원 비밀번호 재설정 */}
const ResetPw = ({children}) => {
    return (
        <Container id='Container' className='border border-dark'>
            <Header/>
                <div>
                    <main>
                        {children}
                        <form className='mt-4 d-flex flex-column align-items-center'>
                            <div className="mb-3">
                                <h3 className='mt-5 fw-bold'>비밀번호</h3>
                                <input type="password"
                                       class="form-control"
                                       id="exampleInputPassword1"
                                       placeholder='6~12자리의 영문,숫자'
                                       style={{ width: '300px' }}></input>
                                <h3 className='mt-3 fw-bold'>비밀번호 확인</h3>
                                <input type="password"
                                       class="form-control"
                                       id="exampleInputPassword1"
                                       placeholder='6~12자리의 영문,숫자'
                                       style={{ width: '300px' }}></input>
                            </div>
                            <div className='d-flex justify-content-center'>
                                {/* 비밀번호가 일치하면 변경완료 모달 출력 후 01로그인으로 이동, 일치하지 않으면 에러모달 구현 */}
                                <Link to='/Login' className='d-block'>
                                    <a className='btn btn-primary btn-outline-warning'
                                       href='#'
                                       role='button'
                                       style={{ width: '300px' }}>비밀번호 변경</a>
                                </Link>
                            </div>
                        </form>
                    </main>
                </div>
            <Footer/>
        </Container>
    )
}

export default ResetPw