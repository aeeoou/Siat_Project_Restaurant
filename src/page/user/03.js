import UserLayout from '../UserLayout';
import { Link } from 'react-router-dom'

{/* USER.03 회원가입 완료 */}
const CompleteMemRegistration = ({children}) => {
    return (
        <UserLayout>
            <div>
                <main>
                    {children}
                    <div className='mt-5 text-center fw-bold'>
                        <h3 className='fw-bolder'>회원 가입 완료</h3>
                        <hr style={{ width: '50%', margin: '0 auto' }}/>
                        <div className='my-5'>회원가입이 성공적으로 완료되었습니다.</div>
                    </div>
                    <div className='d-flex justify-content-center my-5'>
                        <Link to='/login' className='d-block'>
                            <a className='btn btn-primary btn-outline-warning p-2'
                               href='#'
                               role='button'
                               style={{ width: '300px' }}>로그인</a>
                        </Link>
                    </div>
                </main>
            </div>
        </UserLayout>
    )
}

export default CompleteMemRegistration