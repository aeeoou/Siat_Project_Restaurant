import Header from '../Header'
import Footer from '../Footer'
import {Container} from 'react-bootstrap'

{/* ADMIN.USER.01 회원목록조회 */}
const MemListInquiry = ({children}) => {
    return (
        <Container id='Container' className='border border-dark'>
            {/* ADMIN header로 변경하자 */}
            <Header/>
                <div>
                    <main className='px-3'>
                        {children}
                        <div className='text-center text-danger'>...상단bar...</div>
                        <br/>
                        <div className='text-start fw-bold' style={{ fontSize: '20px' }}> 회원목록 </div>
                        <div className='pt-3'>
                            <table className="table table-hover text-center">
                                <thead className='table-primary'>
                                    <tr>
                                        <th scope="col">식별번호</th>
                                        <th scope="col">이름</th>
                                        <th scope="col">전화번호</th>
                                        <th scope="col">ID</th>
                                        <th scope="col">가입일</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>김다훈</td>
                                        <td>010-1111-1111</td>
                                        <td>dh1111</td>
                                        <td>2024-01-01</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>한성목</td>
                                        <td>2024-02-02</td>
                                        <td>sm2222</td>
                                        <td>2024-02-02</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>송동현</td>
                                        <td>2024-03-03</td>
                                        <td>dh3333</td>
                                        <td>2024-03-03</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>유종은</td>
                                        <td>2024-04-04</td>
                                        <td>je4444</td>
                                        <td>2024-04-04</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>서형종</td>
                                        <td>2024-05-05</td>
                                        <td>hj5555</td>
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
                                    <option value="2">이름</option>
                                    <option value="3">전화번호</option>
                                    <option value="4">ID</option>
                                    <option value="5">가입일</option>
                                </select>
                                <input type="text" class="form-control" placeholder="검색명을 입력하세요." aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                                <button class="btn btn-outline-warning" type="button" id="button-addon2">검색</button>
                            </div>
                        </div>
                    </main>
                </div>
            {/* ADMIN footer로 변경하자 */}
            <Footer/>
        </Container>
    )
}

export default MemListInquiry