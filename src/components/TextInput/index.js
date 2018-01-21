// @flow
import React, { type Node } from 'react';
import idGenerator from '../../utils/idGenerator';

type Props = {
  id?: string,
  label?: string,
  placeHolder?: string,
  value: *,
};

const TextInput = ({ id, label, placeHolder, value, ...rest }: Props): Node => {
  const labelElement = label ? (
    <label className="label" htmlFor={id}>
      {label}
    </label>
  ) : null;

  return (
    <div className="field">
      {labelElement}
      <div className="control">
        <input
          {...rest}
          id={id}
          className="input"
          type="text"
          placeHolder={placeHolder}
          value={value}
        />
      </div>
    </div>
  );
};

TextInput.defaultProps = {
  placeHolder: 'Text input',
  id: idGenerator(),
};

export default TextInput;
