import UserLayout from '../UserLayout';
import { Link } from 'react-router-dom'

{/* USER.08 회원 수정완료 */}
const CompleteEditMem = ({children}) => {
    return (
        <UserLayout>
                <div>
                    <main>
                        {children}
                        <div className='mt-5 text-center fw-bold'>
                            <h3 className='fw-bolder'>회원 수정 완료</h3>
                            <hr style={{ width: '50%', margin: '0 auto' }}/>
                            <div className='my-5'>변경하신 내용이 저장되었습니다.</div>
                        </div>
                        <div className='d-flex justify-content-center my-5'>
                            <Link to='/NavOffcanvas' className='d-block'>
                                <a className='btn btn-primary btn-outline-warning p-2 btn-sm'
                                   href='#'
                                   role='button'
                                   style={{ width: '300px' }}>메인화면 바로가기</a>
                            </Link>
                        </div>
                    </main>
                </div>
        </UserLayout>
    )
}

export default CompleteEditMem