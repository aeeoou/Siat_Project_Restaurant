import UserLayout from '../UserLayout';
import MyBackButton from "../navigator/02";
import { Link } from 'react-router-dom'

{/* USER.05 비밀번호 찾기 */}
const FindPw = ({children}) => {
    const pageName = '비밀번호 찾기'
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
                        <div className='mt-5 text-start fw-bold'>
                            <h3 className='fw-bold'>비밀번호 찾기</h3>
                        </div>
                        <form className='mt-4 d-flex flex-column align-items-center'>
                            {/* 중복확인 버튼?? - 중복확인 버튼을 눌렀을 때, DB에 있는 아이디면 중복모달을 출력 구현 */}
                            <div className="mb-3">
                                <input type="text"
                                       class="form-control"
                                       id="exampleInputPassword1"
                                       placeholder='아이디'
                                       style={{ width: '300px' }}></input>
                            </div>
                            {/* @ 와 com이 포함되지 않은 문자열이면 에러메시지 출력 구현 */}
                            <div className="mb-3">
                                <input type="email"
                                       class="form-control"
                                       id="exampleInputEmail1"
                                       aria-describedby="emailHelp"
                                       placeholder='이메일'
                                       style={{ width: '300px' }}></input>
                            </div>
                            <button type="submit"
                                    className="mb-3 btn btn-primary btn-outline-warning"
                                    style={{ width: '300px' }}>인증번호 발송</button>
                            <div className="mb-3">
                                <input type="text"
                                       class="form-control"
                                       id="exampleInputPassword1"
                                       placeholder='인증번호'
                                       style={{ width: '300px' }}></input>
                            </div> 
                            <div className='d-flex justify-content-center mb-5'>
                                {/* 인증번호 일치 시 확인모달 구현, 일치하지 않을 경우 에러모달 구현! 모달의 확인버튼을 누르면 06으로 이동 */}
                                <Link to='/ResetPw' className='d-block'>
                                    <a className='btn btn-primary btn-outline-warning'
                                       href='#'
                                       role='button'
                                       style={{ width: '300px' }}>인증번호 확인</a>
                                </Link>
                            </div>
                        </form>
                    </main>
                </div>
        </UserLayout>
    )
}

export default FindPw