import React from 'react';
import { noop } from 'lodash';
import './index.css';

export default function Checkbox({
  children,
  ...resetProps
}) {
  return (
    <label className={'ui-checkbox'}>
      <input type="checkbox" {...resetProps} />
      <span>{children}</span>
    </label>
  )
}

Checkbox.defaultProps = {
  onChange: noop,
};