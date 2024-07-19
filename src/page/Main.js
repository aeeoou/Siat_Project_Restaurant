import {Row, Col} from 'react-bootstrap'
import UserLayout from './UserLayout';

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
                        <div className='advertisementImg mt-2'>
                            광고이미지
                        </div>
                    </Row>
                </Col>
            </Row>
        </UserLayout>
    )
}

export default Main