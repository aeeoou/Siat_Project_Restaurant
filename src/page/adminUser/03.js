import UserLayout from '../UserLayout';
import { Link } from 'react-router-dom'

{/* ADMIN.USER.03 회원삭제완료 */}
const CompleteMemDelete = ({children}) => {
    return (
        <UserLayout>
            <div>
                <main>
                    {children}
                    <div className='mt-5 text-center fw-bolder'>
                        <h3 className='fw-bolder'>회원 삭제 완료</h3>
                        <hr style={{ width: '50%', margin: '0 auto' }}/>
                        <div className='my-5'>회원삭제가 정상적으로 처리되었습니다.</div>
                    </div>
                    <div className='d-flex justify-content-center my-5'>
                        <Link to='/MemListInquiry' className='d-block'>
                            <a className='btn btn-primary btn-outline-warning p-2 btn-sm'
                               href='#'
                               role='button'>회원목록화면 바로가기</a>
                        </Link>
                    </div>
                </main>
            </div>
        </UserLayout>
    )
}

export default CompleteMemDelete