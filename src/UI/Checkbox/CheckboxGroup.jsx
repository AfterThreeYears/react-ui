import React from 'react';
import { noop } from 'lodash';

export default function CheckboxGroup({
  children,
  name,
  value,
  onChange,
}) {

  function handleChange(e) {
    const { checked, value: val } = e.target;
    const copyValue = [...value];
    if (checked) {
      copyValue.push(val);
    } else {
      const index = copyValue.findIndex((item) => item === val);
      if (~index) {
        copyValue.splice(index, 1);
      }
    }
    onChange(copyValue);
  }

  return React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      name,
      onChange: handleChange,
      checked: value.includes(child.props.value),
    });
  });
}

CheckboxGroup.defaultProps = {
  onChange: noop,
  value: [],
};