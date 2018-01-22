// @flow
import React, { type Node } from 'react';
import type { Size, Color } from 'bulma-type';
import classNames from 'classnames';

type Props = {
  size?: Size,
  color?: Color,
  fixedWidth?: boolean,
  className?: string,
  icon: string,
};

const FAIcon = ({ size, color, fixedWidth, className, icon }: Props): Node => {
  const sizeClass = size ? `is-${size}` : '';

  const colorClass = color ? `is-${color}` : '';

  const fixedClass = fixedWidth ? `fa-fw` : '';

  const iconSpanClass = classNames(
    'icon',
    className,
    sizeClass,
    colorClass,
    fixedClass,
  );

  const iconClass = classNames('fas', icon);

  return (
    <span className={iconSpanClass}>
      <i className={iconClass} />
    </span>
  );
};

export default FAIcon;
