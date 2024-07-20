import Header from '../Header'
import Footer from '../Footer'
import {Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

{/* ADMIN.ADVERTISEMENT.01 광고목록 */}
const AdminAdList = ({children}) => {
    return (
        <>
            <Container id='Container' className='border border-dark'>
                {/* ADMIN header로 변경하자 */}
                <Header/>
                    <div>
                        <main className='px-4'>
                            {children}
                            <div className='text-center text-danger'>...상단bar...</div>
                            <br/>
                            <div className='text-start fw-bold' style={{ fontSize: '20px' }}> 광고목록 </div>
                            <div className='pt-3'>
                                {/* 행 클릭 시 03광고수정으로 이동 구현 */}
                                <table className="table table-hover text-center">
                                    <thead className='table-primary'>
                                        <tr>
                                            <th scope="col">식별번호</th>
                                            <th scope="col">식당명</th>
                                            <th scope="col">작성일</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>레스쁘아</td>
                                            <td>2024-01-01</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>삼원가든</td>
                                            <td>2024-02-02</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>김삼보</td>
                                            <td>2024-03-03</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>시골밥상</td>
                                            <td>2024-04-04</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>충무커리</td>
                                            <td>2024-05-05</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
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
                            <div className='d-flex justify-content-center'>
                                <div class="input-group mb-5" style={{ width: '70%' }}>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>선택</option>
                                        <option value="1">식별번호</option>
                                        <option value="2">식당명</option>
                                        <option value="3">작성일</option>
                                    </select>
                                    <input type="text" class="form-control" placeholder="검색명을 입력하세요." aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                                    <button class="btn btn-outline-warning" type="button" id="button-addon2">검색</button>
                                </div>
                            </div>
                            <div className='d-flex justify-content-end mb-5'>
                                <Link to='/AddAd' className='d-block'>
                                    <a className='btn btn-primary btn-outline-warning p-2 btn-sm'
                                       href='#'
                                       role='button'
                                       style={{ background: 'orange' }}>광고 작성</a>
                                </Link>
                            </div>
                        </main>
                    </div>
                {/* ADMIN footer로 변경하자 */}
                <Footer/>
            </Container>
        </>
    )
}

export default AdminAdList