import Header from '../Header'
import Footer from '../Footer'
import {Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

{/* ADVERTISEMENT.03 광고수정 */}
const EditAd = ({children}) => {
    return (
        <>
            <Container id='Container' className='border border-dark'>
                {/* ADMIN header로 변경하기 */}
                <Header/>
                    <div>
                        <main>
                            {children}
                            <div className='text-center text-danger'>...상단bar...</div>
                            <br/>
                            <div classNamme='text-start'>
                            <div class="mb-2">
                                <input type="text"
                                        class="form-control"
                                        placeholder="식당명을 입력하세요."
                                        aria-label="Recipient's username"
                                        aria-describedby="button-addon2">
                                </input>
                            </div>
                                <div>2024-07-19 23:59:59</div>
                            </div>
                            <hr/>
                            <div className='border mb-4 p-4 text-center' style={{ height: '150px' }}>
                                식당이미지
                            </div>
                            <div class="input-group">
                                <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"></input>
                                <button class="btn btn-outline-warning" type="button" id="inputGroupFileAddon04">Button</button>
                            </div>
                            <div className='border mt-3' style={{ height: '150px' }}>
                                광고글을 작성하세요.
                            </div>             
                            <div className='p-1 mt-1'>
                                저작권자 씨앗미디어(주) 무단전재 및 재배포 금지
                            </div>
                            <div className='d-flex justify-content-center'>
                                <Link to='/AdminAdList' className='d-block'>
                                    <a className='btn btn-primary btn-outline-warning mx-1 my-5 p-2 btn-sm' href='#' role='button' style={{ background: 'orange' }}>수정</a>
                                    <a className='btn btn-primary btn-outline-warning mx-1 my-5 p-2 btn-sm' href='#' role='button' style={{ background: 'orange' }}>삭제</a>
                                    <a className='btn btn-primary btn-outline-warning mx-1 my-5 p-2 btn-sm' href='#' role='button' style={{ background: 'orange' }}>취소</a>
                                </Link>
                            </div>
                        </main>
                    </div>
                {/* ADMIN footer로 변경하기 */}
                <Footer/>
            </Container>
        </>
    )
}

export default EditAd