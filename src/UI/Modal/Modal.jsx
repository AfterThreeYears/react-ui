import React from 'react';
import ReactDOM from 'react-dom';
import { noop } from 'lodash';
import { removeDOMFromPage, renderDOMIntoPage } from '../../utils/dom';
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

Modal.confirm = function confirm(params) {
  const { content, onOk, onCancel } = params;
  let renderContainer = null;
  function close() {
    if(renderContainer) {
      removeDOMFromPage(renderContainer);
    }
  }
  async function handleOk() {
    try {
      await onOk();
      close();
    } catch (error) {
      
    }
  }
  async function handleCancel() {
    try {
      await onCancel();
      close();
    } catch (error) {
      
    }
  }
  renderContainer = renderDOMIntoPage(
    <Modal
      visible
      onOk={handleOk}
      onCancel={handleCancel}
    >{content}</Modal>
  );
}