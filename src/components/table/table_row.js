import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const EuiTableRow = ({ children, className, isSelected, isSelectable, hasActions, ...rest }) => {
  const classes = classNames('euiTableRow', className, {
    'euiTableRow-isSelectable': isSelectable,
    'euiTableRow-isSelected': isSelected,
    'euiTableRow-hasActions': hasActions,
  });

  return (
    <tr
      className={classes}
      {...rest}
    >
      {children}
    </tr>
  );
};

EuiTableRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isSelectable: PropTypes.bool,
  isSelected: PropTypes.bool,
  hasActions: PropTypes.bool,
};
