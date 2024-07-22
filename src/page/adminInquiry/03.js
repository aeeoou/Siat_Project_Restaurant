import AdminLayout from '../AdminLayout';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

{/* INQUIRY.03 답변수정 */}
const FixAnswer = () => {
    return (
        <AdminLayout>          
                <div classNamme='mx-2 my-5 text-start'>
                    <div className='my-5 fs-4 fw-bold'>
                        <div classNamme='text-start' >
                            <h5 className='mt-2 fw-bold' style={{ width: '80%', margin: '0 auto', marginBottom: '0.5rem' }}>답변 {'>'} 답변수정</h5>
                            <hr style={{ width: '80%', margin: '0 auto', marginBottom: '1rem' }}></hr>
                            <h5 className='mt-2 fs-6 fw-bold' style={{ width: '80%', margin: '0 auto', marginBottom: '0.5rem' }}>문의제목</h5>
                            <h5 className='fs-6' style={{ width: '80%', margin: '0 auto', marginBottom: '0.5rem' }}> 별점 반영이 안됩니다.</h5>
                            <hr style={{ width: '80%', margin: '0 auto', marginBottom: '1.5rem' }}></hr>
                            <h5 className='mt-2 fs-6 fw-bold' style={{ width: '80%', margin: '0 auto', marginBottom: '0.5rem' }}>문의글</h5>
                            <h5 className='fs-6' style={{ width: '80%', margin: '0 auto', marginBottom: '0.5rem' }}>
                                별점을 매겼었는데, 적용이 안된 것 같아요. 해결해주세요.
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
                    <Link to='/AdminAnswerDelComplete' className='d-block'>
                        <a className='btn btn-primary btn-outline-warning mx-1 my-5 p-2 btn-sm'>삭제</a>    
                    </Link>
                    <Link to='/AdminAnswer' className='d-block'>
                        <a className='btn btn-primary btn-outline-warning mx-1 my-5 p-2 btn-sm'>저장</a>
                        <a className='btn btn-primary btn-outline-warning mx-1 my-5 p-2 btn-sm'>취소</a>
                    </Link>                   
                </div>
        </AdminLayout>    
    )
}

export default FixAnswer