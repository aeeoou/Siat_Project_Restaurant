import Header from '../Header'
import Footer from '../Footer'
import {Container} from 'react-bootstrap'

{/* USER.06 회원 비밀번호 재설정 */}
const ResetPw = ({children}) => {
    return (
        <>
            <Container id='Container' className='border border-dark'>
                <Header/>
                    <div>
                        <main>
                            {children}
                            <form className='mt-4 d-flex flex-column align-items-center'>
                                <div className="mb-3">
                                    <p className='fw-bold'>비밀번호</p> 
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='비밀번호' ></input>
                                    <br/>
                                    <p className='fw-bold'>비밀번호 확인</p> 
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='비밀번호' ></input>
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

export default ResetPw