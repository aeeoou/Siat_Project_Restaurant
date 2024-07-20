import {Row, Col} from 'react-bootstrap'
import {useNavigate} from "react-router-dom";
import {ChevronLeft} from 'react-bootstrap-icons';

const MyBackButton = (props) => {
    const navigate = useNavigate(); //변수 할당시켜서 사용
    const onClickBtn = () => {
      navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
    };

    return (
        <Row>
            <Col>
                <Row className='border border-dark navigation02 d-felx align-items-center text-center'>
                    <div onClick={onClickBtn}>
                        <ChevronLeft className='float-start fs-4'/> <span className='fs-5 fw-bold'>{props.pageName}</span>
                    </div>
                </Row>
            </Col>
        </Row>
    );
  };

  export default MyBackButton 