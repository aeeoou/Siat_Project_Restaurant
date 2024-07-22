import AdminLayout from '../AdminLayout';
import { Link } from 'react-router-dom';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const AdminAdList = () => {
    const advertisements = [
        { id: 1, restaurantName: '레스쁘아', writtenDate: '2024-01-01' },
        { id: 2, restaurantName: '삼원가든', writtenDate: '2024-02-02' },
        { id: 3, restaurantName: '김삼보', writtenDate: '2024-03-03' },
        { id: 4, restaurantName: '시골밥상', writtenDate: '2024-04-04' },
        { id: 5, restaurantName: '충무커리', writtenDate: '2024-05-05' }
    ];

    return (
        <>
            <AdminLayout>
                <div className='me-4 ms-2'>
                    <div className='text-start fw-bold' style={{ fontSize: '20px' }}> 광고목록 </div>
                    <div className='pt-3'>
                        <table className="table table-hover text-start shadow-table">
                            <thead className='table-Warning'>
                                <tr>
                                    <th scope="col">식별번호</th>
                                    <th scope="col">식당명</th>
                                    <th scope="col">작성일</th>
                                </tr>
                            </thead>
                            <tbody>
                                {advertisements.map((advertisement) => (
                                    <tr key={advertisement.id}>
                                        <th scope='row'>
                                            <Link to={`/adminAdvertisementUpdate/${advertisement.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                {advertisement.id}
                                            </Link>
                                        </th>
                                        <td>
                                            <Link to={`/adminAdvertisementUpdate/${advertisement.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                {advertisement.restaurantName}
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to={`/adminAdvertisementUpdate/${advertisement.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                {advertisement.writtenDate}
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* 페이지네이션 */}
                    <nav aria-label="Page navigation example" className='d-flex justify-content-center'>
                        <ul className="pagination" id='paging'>
                            <li className="page-item" id='paging'>
                                <a className="page-link" aria-label="Previous" id='paging'>
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" id='paging'>1</a></li>
                            <li className="page-item"><a className="page-link" id='paging'>2</a></li>
                            <li className="page-item"><a className="page-link" id='paging'>3</a></li>
                            <li className="page-item"><a className="page-link" id='paging'>4</a></li>
                            <li className="page-item"><a className="page-link" id='paging'>5</a></li>
                            <li className="page-item">
                                <a className="page-link" aria-label="Next" id='paging'>
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* 셀렉트 */}
                    <div className='searchContainer d-flex search-container'>
                        <Form.Select className="searchSelect me-2">
                            <option>선택</option>
                            <option>식별번호</option>
                            <option>식당명</option>
                        </Form.Select>
                        <InputGroup>
                            <Form.Control type="text" placeholder="검색어를 입력하세요" />
                            <Button variant="outline-warning">
                                <FaSearch />
                            </Button>
                        </InputGroup>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <Link to='/AddAd' className='d-block'>
                            <a className='btn btn-warning btn-outline-warning p-2 btn-sm fw-bold'
                                role='button'
                                style={{ background: 'orange', color: 'white' }}>광고 작성</a>
                        </Link>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
};

export default AdminAdList;