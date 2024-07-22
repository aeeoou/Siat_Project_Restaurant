import React, { useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

{/* INQUIRY.01 답변목록조회 */}
const AnswerListInq = ({children}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container id='Container' className='border border-dark'>
            {/* ADMIN header로 변경하기 */}
                <div>
                    <main className='px-4'>
                        <div className='border border-dark my-5 px-4'>
                            {children}
                            <div classNamme='text-start'>
                                <h5 className='mt-5 fw-bold'>문의</h5>
                            </div>
                            <hr/>
                            <table className="table table-hover text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">작성자</th>
                                        <th scope="col">제목</th>
                                        <th scope="col">등록일</th>
                                        <th scope="col">조회수</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='my-5' style={{ border: '1px solid #000' }}>
                                        <th scope="row">김다훈</th>
                                        <td>제목1</td>
                                        <td>2024-01-01</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="4" className="text-start" style={{ paddingBottom: '30px' }}>
                                            RE: 관리자가 답변했습니다.
                                            {/* 부트스트랩 아이콘 모양으로 바꿔야 합니다. */}
                                            <Link to="/AdminAnswerCreate" className="btn btn-primary btn-sm ms-3">
                                                <i class="bi bi-chevron-right">화살표</i>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr className='my-5' style={{ border: '1px solid #000' }}>
                                        <th scope="row">한성목</th>
                                        <td>제목2</td>
                                        <td>2024-02-02</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="4" className="text-start" style={{ paddingBottom: '30px' }}>
                                            RE: 관리자가 답변했습니다.
                                            {/* 부트스트랩 아이콘 모양으로 바꿔야 합니다. */}
                                            <Link to="/AdminAnswerCreate" className="btn btn-primary btn-sm ms-3">
                                                <i class="bi bi-chevron-right">화살표</i>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr className='my-5' style={{ border: '1px solid #000' }}>
                                        <th scope="row">송동현</th>
                                        <td>제목3</td>
                                        <td>2024-03-03</td>
                                        <td>100</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="4" className="text-start" style={{ paddingBottom: '30px' }}>
                                            RE: 관리자가 답변했습니다.
                                            {/* 부트스트랩 아이콘 모양으로 바꿔야 합니다. */}
                                            <Link to="/AdminAnswerCreate" className="btn btn-primary btn-sm ms-3">
                                                <i class="bi bi-chevron-right">화살표</i>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr className='my-5' style={{ border: '1px solid #000' }}>
                                        <th scope="row">유종은</th>
                                        <td>제목4</td>
                                        <td>2024-04-04</td>
                                        <td>1000</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="4" className="text-start" style={{ paddingBottom: '30px' }}>
                                            RE: 관리자가 답변했습니다.
                                            {/* 부트스트랩 아이콘 모양으로 바꿔야 합니다. */}
                                            <Link to="/AdminAnswerCreate" className="btn btn-primary btn-sm ms-3">
                                                <i class="bi bi-chevron-right">화살표</i>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>      
                            {/* 부트스트랩 페이지네이션 (비동기처리 해야함)*/}
                            <nav aria-label="Page navigation example" className='d-flex justify-content-center p-4'>
                                <ul class="pagination">
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="mb-5 d-flex justify-content-end">
                                <div className="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        답변없는 게시글만 보기
                                    </label>
                                </div>
                            </div>
                        </div>        
                    </main>
                </div>
            {/* ADMIN footer로 변경하기 */}
        </Container>
    )
}

export default AnswerListInq