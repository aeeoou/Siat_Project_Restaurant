import Header from '../Header'
import Footer from '../Footer'
import {Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

{/* ADMIN.USER.02 회원조회 */}
const MemInquiry = ({children}) => {
    return (
        <Container id='Container' className='border border-dark'>
            {/* ADMIN header로 변경하자 */}
            <Header/>
                <div>
                    <main className='px-4'>
                        {children}
                        <div className='text-center text-danger'>...상단bar...</div>
                        {/* 회원정보 왼쪽에 아이콘 넣기 */}
                        <div className='mt-5 text-start fw-bold' style={{ fontSize: '20px' }}> 회원 정보 </div>
                        <div className='pt-3'>
                            <table className="table border table-hover text-center">
                                <tbody>
                                    <tr>
                                        <th className='border' scope="col">식별번호</th>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th className='border' scope="col">이름</th>
                                        <td>김다훈</td>
                                    </tr>
                                    <tr>
                                        <th className='border' scope="col">전화번호</th>
                                        <td>010-1111-1111</td>
                                    </tr>
                                    <tr>
                                        <th className='border' scope="col">ID</th>
                                        <td>dh1111</td>
                                    </tr>
                                    <tr>
                                        <th className='border' scope="col">가입일</th>
                                        <td>2024-01-01</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <Link to='/MemListInquiry' className='d-block'>
                                <a className='btn btn-primary btn-outline-warning mx-1 my-2 btn-sm'
                                   href='#' role='button'>회원삭제</a>
                            </Link>
                        </div>
                    </main>
                </div>
            {/* ADMIN footer로 변경하자 */}
            <Footer/>
        </Container>
    )
}

export default MemInquiry