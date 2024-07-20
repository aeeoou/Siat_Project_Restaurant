import UserLayout from '../UserLayout';
import MyBackButton from "../navigator/02";
import {Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

{/* USER.07 회원수정 */}
const EditMem = ({children}) => {
    const pageName = '회원수정'
    const btnName = ''
    const btnWidth = 0
    const btnTitle = ''
    const modalBody= ''
    const completeBtn =''

    return (
        <UserLayout>
            <MyBackButton pageName={pageName}/>
            <div>
                <main>
                    {children}
                    <form className='mt-4 px-5'>
                        <div className='my-5'>
                            <h5 className='fw-bold'> 아이디: user </h5>
                            <h5 className='fw-bold'> 이름: 김다훈 </h5>
                            <h5 className='fw-bold'> 생년월일: 1995-06-15</h5>
                        </div>
                        <div className="mb-3 fw-bold">
                            <h6 className='fw-bold'>*비밀번호</h6>
                            <input type="password"
                                   class="form-control"
                                   id="exampleInputPassword1"
                                   placeholder='6~12자리의 영문, 숫자'>
                            </input>
                            <h6 className='mt-3 fw-bold'>*비밀번호 확인</h6>
                            <input type="password"
                                   class="form-control"
                                   id="exampleInputPassword1"
                                   placeholder='6~12자리의 영문, 숫자' >
                            </input>
                        </div>
                        <div className="mb-3 fw-bold">
                            <h6 className='fw-bold'>*이메일</h6>
                            <input type="email"
                                   class="form-control"
                                   id="exampleInputEmail1"
                                   aria-describedby="emailHelp"
                                   placeholder='6~12자리의 영문, 숫자'>
                            </input>
                        </div>
                        <h6 className='fw-bold'>휴대번 번호</h6>
                        <div className="input-group mb-3 fw-bold">
                            <input type="text"
                                   class="form-control"
                                   id="exampleInputPassword1"
                                   placeholder='6~12자리의 영문, 숫자' >
                            </input>
                            {/* 일치->성공메세지, 불일치->실패메세지 출력 구현 */}
                            <button className="btn btn-outline-warning" type="button">
                                인증
                            </button>
                        </div>
                        <h6 className='mt-3 fw-bold'>인증 번호</h6>
                        <div className="input-group mb-3 fw-bold">
                            <input type="text"
                                   class="form-control"
                                   id="exampleInputPassword1"
                                   placeholder='6~12자리의 영문, 숫자'>
                            </input>
                            <Link to='/CompleteEditMem'>
                                <a className='btn btn-outline-warning'
                                   href='#'
                                   role='button'>확인</a>
                            </Link>
                        </div>
                        <h5 className='mt-3 fw-bold'>*은 필수입력 사항입니다.</h5>
                        <div className='d-flex justify-content-center'>
                        <Link to='/CompleteEditMem'>
                            <a className='btn btn-primary btn-outline-warning mx-1 my-5 p-2 btn-sm'
                               href='#'
                               role='button'>확인</a>
                        </Link>
                        {/* 회원탈퇴 클릭 시 재여부 모달창 출력, 예 클릭 시 09회원탈퇴로 이동, 아니오 클릭 시 모달 닫히고 네비게이션01 LNB로 이동 구현 */}
                        <Link to='/NavOffcanvas'>
                            <a className='btn btn-primary btn-outline-warning mx-1 my-5 p-2 btn-sm'
                               href='#'
                               role='button'>회원탈퇴</a>
                        </Link>
                    </div>
                    </form>
                </main>
            </div>
        </UserLayout>
    )
}

export default EditMem