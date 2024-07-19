import Header from '../Header'
import Footer from '../Footer'
import {Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

{/* ADVERTISEMENT.01 광고목록조회 */}
const AdListInquiry = ({children}) => {
    return (
        <>
            <Container id='Container' className='border border-dark'>
                <Header/>
                    <div>
                        <main>
                            {children}
                            <div className='text-center text-danger'>...상단bar...</div>
                            <br/>
                            <div className='border border-dark w-72 h-96 p-4'>
                                {/* 페이지 이동은 Link */}
                                <Link to='/AdInquiry' className='d-block'>
                                    <div className='border h-96 mb-4 p-4 text-center'>
                                        식당이미지
                                    </div>
                                </Link>
                                <div className='border h-96 mb-4 p-4 text-start'>
                                    식당명 : 삼원가든<br/>
                                    광고제목 : 가족과 외식하기 좋은, 비즈니스 다이닝에 좋은, 상견례에 좋은, 역사가 오래된, 외국인 접대에 좋은,
                                              인테리어가 좋은, 정원이나 산책로가 있는, 테라스가 있는, 프리이빗룸이 있는, 스몰웨딩을 할 수 있는<br/>
                                    광고내용 : 50여 년 전통의 우리나라 대표 갈빗집. 대표 메뉴인 양념 갈비와 함께 나오는 반찬도 정갈하며 갈비 외에
                                              등심이나 불고기, 단품 요리도 수준급이다. 예약제로 운영되는 특실에서는 다양한 한정식과, 한우 모둠 구
                                              이가 나오는 차별화된 코스로 진행된다. 특실 예약은 02-548-3037로 문의하면 된다.<br/>
                                    게시날짜 : 2024-07-19
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <Link to='/AdInquiry' className='d-block'>
                                    <a className='btn btn-primary btn-outline-warning mt-4 p-2 btn-sm' href='#' role='button' style={{ background: 'orange' }}> 자세히 </a>
                                    </Link>
                                </div>
                            </div>
                            <hr/>
                            <div className='border border-dark w-72 h-96 p-4'>
                                {/* 페이지 이동은 Link */}
                                <Link to='/AdInquiry' className='d-block'>
                                    <div className='border h-96 mb-4 p-4 text-center'>
                                        식당이미지
                                    </div>
                                </Link>
                                <div className='border h-96 mb-4 p-4 text-start'>
                                    식당명 : 레스쁘아<br/>
                                    광고제목 : L'Espoir du Hibou, 서울 2024 선정!!<br/>
                                    광고내용 : '명실상부 최고의 비스트로.' '전체요리 하나하나에 빠짐이 없다.' '정말 맛있는 프렌치 요리를 즐기고 싶다면
                                               반드시 가봐야할 곳.' '요리 하나하나 힘이 있습니다. 빈틈없는 훌륭한 곳입니다. 서울에서 손꼽을 프렌치 레
                                               스토랑입니다.' 절정에 이르렀다는 표현이 이해가 되는 레스토랑. 맛도 맛이지만 다른 곳에 비해 양이 많다는
                                               점도 가격대비 만족도가 높은 이유.' '기본적인 어니언 수프가 참 맛있었습니다.' '가격 대비 이 정도의 프렌
                                               치를 가볍게 즐길 수 있는 곳은 많지 않다.' '가격도 맛도 사로잡는 최고의 프렌치 비스트로다.' '아주 좋다.'<br/>
                                    게시날짜 : 2024-07-19
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <Link to='/AdInquiry' className='d-block'>
                                        <a className='btn btn-primary btn-outline-warning mt-4 p-2 btn-sm' href='#' role='button' style={{ background: 'orange' }}> 자세히 </a>
                                    </Link>
                                </div>
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
                        </main>
                    </div>
                <Footer/>
            </Container>
        </>
    )
}

export default AdListInquiry