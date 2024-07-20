import Header from '../Header'
import Footer from '../Footer'
import {Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

{/* USER.07 회원수정 */}
const EditMem = ({children}) => {
    return (
        <>
            <Container id='Container' className='border border-dark'>
                <Header/>
                    <div>
                        <main>
                            {children}
                            <form className='mt-4'>
                                <div className='my-5'>
                                    <p className='fw-bold'> 아이디: user </p>
                                    <p className='fw-bold'> 이름: 김다훈 </p>
                                    <p className='fw-bold'> 생년월일: 1995-06-15</p>
                                </div>
                                <div className="mb-3 fw-bold">
                                    <p>*비밀번호</p>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='6~12자리의 영문, 숫자' ></input>
                                    <p>*비밀번호 확인</p>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='6~12자리의 영문, 숫자' ></input>
                                </div>
                                <div className="mb-3 fw-bold">
                                    <p>*이메일</p>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='6~12자리의 영문, 숫자'></input>
                                </div>
                                <div className="mb-3 fw-bold">
                                    <p>휴대번 번호</p>
                                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder='6~12자리의 영문, 숫자' ></input>
                                    <p>비밀번호 확인</p>
                                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder='6~12자리의 영문, 숫자' ></input>
                                    <p>*은 필수입력 사항입니다.</p>
                                </div>
                                <div className='d-flex justify-content-center'>
                                <Link to='/AdminAdList' className='d-block'>
                                    <a className='btn btn-primary btn-outline-warning mx-1 my-5 p-2 btn-sm' href='#' role='button' style={{ background: 'orange' }}>확인</a>
                                </Link>
                                <Link to='/login' className='d-block'>
                                    <a className='btn btn-primary btn-outline-warning mx-1 my-5 p-2 btn-sm' href='#' role='button' style={{ background: 'orange' }}>회원탈퇴</a>
                                </Link>
                            </div>
                            </form>
                        </main>
                    </div>
                <Footer/>
            </Container>
        </>
    )
}

export default EditMem