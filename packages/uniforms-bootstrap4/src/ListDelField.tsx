import React from 'react';
import classnames from 'classnames';
import { connectField, filterDOMProps } from 'uniforms';

const ListDel = ({
  className,
  disabled,
  name,
  parent,
  removeIcon,
  ...props
}: {
  disabled?: boolean;
  parent?: any;
  name: string;
  className?: string;
  removeIcon?: any;
}) => {
  const fieldIndex = +name.slice(1 + name.lastIndexOf('.'));
  const limitNotReached =
    !disabled && !(parent.minCount >= parent.value.length);

  return (
    <span
      className={classnames('badge badge-pill', className)}
      onClick={() =>
        limitNotReached &&
        parent.onChange(
          []
            .concat(parent.value.slice(0, fieldIndex))
            .concat(parent.value.slice(1 + fieldIndex)),
        )
      }
      {...filterDOMProps(props)}
    >
      {removeIcon}
    </span>
  );
};

ListDel.defaultProps = { removeIcon: <i className="octicon octicon-dash" /> };

export default connectField(ListDel, { initialValue: false });
