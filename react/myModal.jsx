import { useEffect } from 'react';
import ReactDOM from 'react-dom';

function MyModal({ open, children, disableGlobalScroll }) {
  useEffect(() => {
    if (disableGlobalScroll && open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open, disableGlobalScroll]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <div className='modal' style={{
      position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', display: 'flex', justifyContent: 'center',
      alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }}>
      <div className='modal-content' style={{
        backgroundColor: 'white', padding: '20px', borderRadius: '10px', border: '1px solid black',
        maxWidth: '300px', maxHeight: '300px', overflowY: 'auto'
      }}>
        {children}
      </div>
    </div>,
    document.getElementById('portal')
  );
}

export default MyModal;