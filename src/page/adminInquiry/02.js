import AdminLayout from '../AdminLayout';
import { Link } from 'react-router-dom'

const AdminAnswerCreate = () => {
    return (
        <AdminLayout>          
                <div classNamme='mx-2 my-5 text-start'>
                    <div className='my-5 fs-4 fw-bold'>
                        <div classNamme='text-start' >
                            <h5 className='mt-2 fw-bold' style={{ width: '80%', margin: '0 auto', marginBottom: '0.5rem' }}>답변 {'>'} 답변추가</h5>
                            <hr style={{ width: '80%', margin: '0 auto', marginBottom: '1rem' }}></hr>
                            <h5 className='mt-2 fs-6 fw-bold' style={{ width: '80%', margin: '0 auto', marginBottom: '0.5rem' }}>문의제목</h5>
                            <h5 className='fs-6' style={{ width: '80%', margin: '0 auto', marginBottom: '0.5rem' }}> 검색창에 글이 안쳐져요.</h5>
                            <hr style={{ width: '80%', margin: '0 auto', marginBottom: '1.5rem' }}></hr>
                            <h5 className='mt-2 fs-6 fw-bold' style={{ width: '80%', margin: '0 auto', marginBottom: '0.5rem' }}>문의글</h5>
                            <h5 className='fs-6' style={{ width: '80%', margin: '0 auto', marginBottom: '0.5rem' }}>
                                검색창에 제가 자주가던 음식점을 검색했는데, 결과가 뜨질 않아요. 어떻게 된 일인가요?
                            </h5>
                        </div>
                    </div>
                </div>
               <div classNamme='text-start'>
                    <h4 className='mt-5 fw-bold' style={{ width: '80%', margin: '0 auto', marginBottom: '1rem' }}>답변</h4>
                    <input className='mt-2 border d-flex align-items-center justify-content-center'
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder='답변을 작성하세요.'
                        style={{ width: '80%', height: '150px', margin: '0 auto' }}>
                    </input>   
                </div>

                <div className='d-flex justify-content-end'>
                    <Link to='/adminAnswer' className='d-block'>
                        <a className='btn btn-primary btn-outline-warning mx-1 my-5 p-2 btn-sm'>등록</a>
                        <a className='btn btn-primary btn-outline-warning mx-1 my-5 p-2 btn-sm'>취소</a>
                    </Link>
                </div>
        </AdminLayout>    
    )
}

export default AdminAnswerCreate