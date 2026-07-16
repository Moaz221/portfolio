import { useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function Modal({open, onClose, title, desc, children, className=''}) {
  useEffect(() => {
    if (!open) return;
    const esc = e => e.key==='Escape' && onClose();
    document.addEventListener('keydown', esc);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', esc); document.body.style.overflow = ''; };
  }, [open, onClose]);
  return ReactDOM.createPortal(
    <div className={`modal-bg ${open?'open':''}`} onClick={e => e.target===e.currentTarget && onClose()} role="dialog" aria-modal="true" aria-label={title||'Dialog'}>
      <div className={`modal-box ${className}`}>
        <button className="modal-x" onClick={onClose} aria-label="Close dialog">×</button>
        {title && <h3 className="text-xl font-bold mb-2 font-mono">{title}</h3>}
        {desc && <p className="text-neutral-400 mb-5 text-sm">{desc}</p>}
        {children}
      </div>
    </div>,
    document.body
  );
}