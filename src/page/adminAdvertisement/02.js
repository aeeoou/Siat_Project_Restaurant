import React, { useState } from 'react';
import Header from '../Header'
import Footer from '../Footer'
import { Button, Container, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'


{/* ADVERTISEMENT.02 광고추가 */}
const AddAd = ({children}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                                이 게시물은 (주)맛있당에 관리 권한이 있음.
                            </div>
                            <div className='d-flex justify-content-center'>
                                <Button
                                    className='btn btn-primary btn-outline-warning mx-1 my-5 p-2 btn-sm'
                                    onClick={handleShow}
                                    style={{ background: 'orange' }}
                                >
                                    등록
                                </Button>
                                <Link to='/AdminAdList' className='d-block'>
                                    <a className='btn btn-primary btn-outline-warning mx-1 my-5 p-2 btn-sm' onClick={handleShow} style={{ background: 'orange' }}>등록</a>
                                    <a className='btn btn-primary btn-outline-warning mx-1 my-5 p-2 btn-sm' onClick={handleShow} style={{ background: 'orange' }}>취소</a>
                                </Link>
                            </div>
                        </main>
                    </div>
                {/* ADMIN footer로 변경하기 */}
                <Footer/>
            </Container>
            {/* 모달 */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>모달 제목</Modal.Title>
                </Modal.Header>
                <Modal.Body>모달 본문 내용이 들어갑니다.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        닫기
                    </Button>
                    <Button variant="primary">
                        변경 사항 저장
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddAd