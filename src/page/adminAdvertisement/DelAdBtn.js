import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function DeleteAdBtn () {
    const [show, setShow] = useState(false)

    const onClose = () => setShow(false)
    const onShow = () => setShow(true)

    return (
        <>
            <Button variant='warning' className='delAdBtn me-2' onClick={onShow}>삭제</Button>

            <Modal show={show} onHide={onClose}>
                <Modal.Header>
                    <Modal.Title>광고 삭제</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                해당 광고를 삭제하시겠습니까?<br/>
                (해당광고가 삭제되며 복구할 수 없습니다.)
                    <div className='d-flex justify-content-end'>
                        <Button variant='warning' className='deleteNoBtn me-2' onClick={onClose}>
                            아니오
                        </Button>
                        <a href='/adminAdvertisementDelComplete'>
                            <Button variant='warning' className='deleteYesBtn'>
                                예
                            </Button>
                        </a>
                    </div>
                </Modal.Body>      
            </Modal>
        </>
    )
}

export default DeleteAdBtn