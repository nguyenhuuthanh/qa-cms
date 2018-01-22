// @flow
import React, { type Node } from 'react';
import classNames from 'classnames';
import idGenerator from '../../utils/idGenerator';

type Props = {
  id?: string,
  label?: string,
  placeHolder?: string,
  className?: string,
  errorMessage?: string,
  successMessage?: string,
  valid?: boolean,
  value: *,
};

const TextInput = ({
  id,
  label,
  valid,
  errorMessage,
  successMessage,
  placeHolder,
  className,
  value,
  ...rest
}: Props): Node => {
  const inputClass = classNames(className, 'text', {
    'is-danger': !valid,
  });
  const labelElement = label ? (
    <label className="label" htmlFor={id}>
      {label}
    </label>
  ) : null;
  const errorElement = errorMessage ? (
    <p className="help is-danger">{errorMessage}</p>
  ) : null;
  const successElement = successMessage ? (
    <p className="help is-success">{successMessage}</p>
  ) : null;

  return (
    <div className="field">
      {labelElement}
      <div className="control">
        <input
          {...rest}
          id={id}
          className={inputClass}
          type="text"
          placeHolder={placeHolder}
          value={value}
        />
      </div>
      {errorElement}
      {successElement}
    </div>
  );
};

TextInput.defaultProps = {
  placeHolder: 'Text input',
  id: idGenerator(),
  errorMessage: '',
  valid: false,
};

export default TextInput;
