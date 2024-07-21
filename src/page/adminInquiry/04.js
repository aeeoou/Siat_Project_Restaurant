import UserLayout from '../UserLayout';
import { Link } from 'react-router-dom'

{/* INQUIRY.04 답변삭제완료 */}
const CompleteInqDelete = ({children}) => {
    return (
        <UserLayout>
            <div>
                <main>
                    {children}
                    <div className='mt-5 text-center fw-bolder'>
                        <h3 className='fw-bolder'>답변 삭제 완료</h3>
                        <hr style={{ width: '50%', margin: '0 auto' }}/>
                        <div className='my-5'>답변 삭제가 정상적으로 처리되었습니다.</div>
                    </div>
                    <div className='d-flex justify-content-center my-5'>
                        <Link to='/AnswerListInq' className='d-block'>
                            <a className='btn btn-primary btn-outline-warning p-2 btn-sm'
                               href='#'
                               role='button'>답변목록화면 바로가기</a>
                        </Link>
                    </div>
                </main>
            </div>
        </UserLayout>
    )
}

export default CompleteInqDelete