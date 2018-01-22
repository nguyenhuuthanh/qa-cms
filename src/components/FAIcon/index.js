// @flow
import React, { type Node } from 'react';
import type { Size } from 'bulmaType';
import classNames from 'classnames';

type Props = {
  size?: Size,
  color?: string,
  fixedWidth?: boolean,
  stacked?: boolean,
  className?: string,
};

const FAIcon = ({
  size,
  color,
  fixedWidth,
  stacked,
  className,
}: Props): Node => {
  const sizeClass = ['small', 'medium', 'large'].some(c => c === size)
    ? `is-${size}`
    : '';

  const colorClass = ['info', 'success', 'warning', 'danger'].some(
    c => c === size,
  )
    ? `is-${size}`
    : '';

  const iconClass = classNames('icon');

  return (
    <span className="icon">
      <i className="fas fa-home" />
    </span>
  );
};
