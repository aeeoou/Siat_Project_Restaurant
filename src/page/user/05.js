import Header from '../Header'
import Footer from '../Footer'
import {Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

{/* USER.05 비밀번호 찾기 */}
const FindPw = ({children}) => {
    return (
        <>
            <Container id='Container' className='border border-dark'>
                <Header/>
                    <div>
                        <main>
                            {children}
                            <div className='mt-5 text-start fw-bolder'>
                                <h3>비밀번호 찾기</h3>
                            </div>
                            <form className='mt-4 d-flex flex-column align-items-center'>
                                <div className="mb-3">
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='비밀번호' ></input>
                                </div>
                                <div className="mb-3">
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='이메일'></input>
                                </div>         
                                <button type="submit" className="mb-3 btn btn-primary btn-outline-warning">인증번호 발송</button>
                                <div className="mb-3">
                                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder='인증번호' ></input>
                                </div> 
                                <button type="submit" className="mb-5 btn btn-primary btn-outline-warning">비밀번호 변경</button>
                            </form>
                        </main>
                    </div>
                <Footer/>
            </Container>
        </>
    )
}

export default FindPw