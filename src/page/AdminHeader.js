import {Row, Col} from 'react-bootstrap';
import {useLocation} from 'react-router-dom';

const AdminHeader = ({showWelcome}) => {
    const location = useLocation()

    const getMenuName = (path) => {
        if(path === '/adminMain') {
            return '메인'
        } else if(path.startsWith('/adminMember')) {
            return '회원'
        } else if(path.startsWith('/adminRestaurant')) {
            return '식당'
        } else if(path.startsWith('/adminReservation')) {
            return '예약'
        } else if(path.startsWith('/adminAdvertisement')) {
            return '광고'
        } else {
            return '답변'
        }
    }

    return (
        <Row id='adminHeader'>
            <Col className='border border-dark d-flex align-items-center justify-content-start' xs={4}>
                <div className='border border-dark ms-4 p-2'>로고이미지</div><div className='ms-4 fs-5 fw-bold'>Admin</div>
            </Col>
            <Col className='border border-dark p-4 text-center'>
                <div className='d-inline p-2 fw-bold'>{getMenuName(location.pathname)}</div>
                {showWelcome && (
                    <div className='welcome-message'>abc님 환영합니다.</div>
                )}
            </Col>
        </Row>
    )
}
export default AdminHeader