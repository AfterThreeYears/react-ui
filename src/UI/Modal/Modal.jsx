import React from 'react';
import ReactDOM from 'react-dom';
import { noop } from 'lodash';
import './index.css';

export default function Modal({
  children,
  onOk,
  onCancel,
  visible,
}) {
  return visible ? ReactDOM.createPortal(<div className="ui-modal-mask">
    <div className="ui-modal">
      {children}
      <button onClick={onOk}>确定</button>
      <button onClick={onCancel}>取消</button>
    </div>
  </div>, document.body) : null
}

Modal.defaultProps = {
  visible: false,
  onCancel: noop,
  onOk: noop,
};