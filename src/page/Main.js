import {Row, Col} from 'react-bootstrap'
import UserLayout from './UserLayout';
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <UserLayout>
            <Row>
                <Col>
                    <Row>
                        <div className='foodImg'>
                            음식이미지
                        </div>
                    </Row>
                    <Row>
                        <Link to='/AdListInquiry' className='d-block'>
                            <div className='advertisementImg mt-2'>
                                광고이미지
                            </div>
                        </Link>
                    </Row>
                </Col>
            </Row>
        </UserLayout>
    )
}

export default Main