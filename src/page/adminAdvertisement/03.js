import AdminLayout from '../AdminLayout';
import DelAdBtn  from './DelAdBtn';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

{/* ADVERTISEMENT.03 광고수정 */}
const AdminAdvertisementUpdate = () => {
    const advertisements = [
        { id: 1, restaurantName: '레스쁘아', writtenDate: '2024-01-01', content: 'aaa' },
        { id: 2, restaurantName: '삼원가든', writtenDate: '2024-02-02', content: 'bbb' },
        { id: 3, restaurantName: '김삼보', writtenDate: '2024-03-03', content: 'ccc' },
        { id: 4, restaurantName: '시골밥상', writtenDate: '2024-04-04', content: 'ddd' },
        { id: 5, restaurantName: '충무커리', writtenDate: '2024-05-05', content: 'eee' }
    ];

    const { id } = useParams();
    const advertisementId = parseInt(id, 10);
    const advertisement = advertisements.find(ad => ad.id === advertisementId);

    if (!advertisement) {
        return <div>Advertisement not found</div>;
    }

    return (
        <>
            <AdminLayout>
                <div>
                    <div className='text-start'>
                        <div className="mb-2">
                            <input type="text"
                                className="form-control"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                                defaultValue={advertisement.restaurantName}
                            />
                        </div>
                        <div>{advertisement.writtenDate}</div>
                    </div>
                    <hr />
                    <div className='border mb-4 p-4 text-center' style={{ height: '150px' }}>
                        식당이미지
                    </div>
                    <Row className="justify-content-center mb-4">
                        <Col>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Control type="file" className="fileUploadButton" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="advertisement">
                        <Form.Control as="textarea" rows={10} defaultValue={advertisement.content}>
                        </Form.Control>
                    </Form.Group>
                    <div className='p-1 mt-1'>
                        저작권자 씨앗미디어(주) 무단전재 및 재배포 금지
                    </div>
                    <div className='d-flex justify-content-center mt-3'>
                        <Link to='/adminAdvertisement' className='d-block me-2'>
                            <Button variant='warning' className='fixAdBtn'>수정</Button>
                        </Link>
                        <DelAdBtn/>
                        <Link to='/adminAdvertisement' className='d-block'>
                            <Button variant='warning' className='backtoAdList'>취소</Button>
                        </Link>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
};

export default AdminAdvertisementUpdate;
