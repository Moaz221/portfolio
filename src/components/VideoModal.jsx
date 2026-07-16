import { useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function VideoModal({open, onClose, url}) {
  useEffect(() => {
    if (!open) return;
    const esc = e => e.key==='Escape' && onClose();
    document.addEventListener('keydown', esc);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', esc); document.body.style.overflow = ''; };
  }, [open, onClose]);
  return ReactDOM.createPortal(
    <div className={`vid-modal-bg ${open?'open':''}`} onClick={e => e.target===e.currentTarget && onClose()}>
      <button className="vid-modal-x" onClick={onClose} aria-label="Close video">×</button>
      <div className="vid-modal-box">
        {open && url && <iframe src={`${url}?autoplay=1&muted=1&loop=1&autopause=0`} width="100%" height="100%" allow="autoplay;fullscreen;picture-in-picture" allowFullScreen title="Project Demo"/>}
      </div>
    </div>,
    document.body
  );
}