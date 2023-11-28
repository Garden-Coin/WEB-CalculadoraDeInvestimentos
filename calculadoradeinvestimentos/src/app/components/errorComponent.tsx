import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { ErrorToast } from '../interfaces/error';

function ErrorComponent(props: ErrorToast) {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="bg-dark position-relative"
      style={{ minHeight: '240px' }}
    >
      <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1 }}>
        <Toast>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{props.title}</strong>
            <small className="text-muted">just now</small>
          </Toast.Header>
          <Toast.Body>
                <p>{props.description}</p>
                <p>{props.suggestion}</p>    
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default ErrorComponent;