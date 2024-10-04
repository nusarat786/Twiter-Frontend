
import { Spinner, Modal } from 'react-bootstrap';



const LoadingSpinner2 = ({ showLoading,text }) => {
  return (
    <Modal
      show={true}
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Body className="d-flex justify-content-center align-items-center bg-10">
        <Spinner animation="border" role="status" >
          <span className="sr-only">{text}</span>
        </Spinner>
        &nbsp; <span>{text}</span>
      </Modal.Body>
    </Modal>
  );
};


export default LoadingSpinner2;
