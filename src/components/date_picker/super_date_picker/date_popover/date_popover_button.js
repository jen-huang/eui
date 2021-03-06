import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import { EuiPopover } from '../../../popover';

import { formatTimeString } from '../pretty_duration';
import { EuiDatePopoverContent } from './date_popover_content';

export function EuiDatePopoverButton(props) {
  const {
    position,
    isInvalid,
    needsUpdating,
    value,
    buttonProps,
    roundUp,
    onChange,
    dateFormat,
    isOpen,
    onPopoverToggle,
    onPopoverClose,
    ...rest
  } = props;

  const classes = classNames([
    'euiDatePopoverButton',
    `euiDatePopoverButton--${position}`,
    {
      'euiDatePopoverButton-isSelected': isOpen,
      'euiDatePopoverButton-isInvalid': isInvalid,
      'euiDatePopoverButton-needsUpdating': needsUpdating,
    },
  ]);

  let title = value;
  if (isInvalid) {
    title = `Invalid date: ${title}`;
  } else if (needsUpdating) {
    title = `Update needed: ${title}`;
  }

  const button = (
    <button
      onClick={onPopoverToggle}
      className={classes}
      title={title}
      data-test-subj={`superDatePicker${position}DatePopoverButton`}
      {...buttonProps}>
      {formatTimeString(value, dateFormat, roundUp)}
    </button>
  );

  return (
    <EuiPopover
      className="euiDatePopoverButton__popover"
      button={button}
      isOpen={isOpen}
      closePopover={onPopoverClose}
      anchorPosition={position === 'start' ? 'downLeft' : 'downRight'}
      anchorClassName="euiDatePopoverButton__popoverAnchor"
      panelPaddingSize="none"
      ownFocus
      {...rest}>
      <EuiDatePopoverContent
        value={value}
        roundUp={roundUp}
        onChange={onChange}
        dateFormat={dateFormat}
      />
    </EuiPopover>
  );
}

EuiDatePopoverButton.propTypes = {
  position: PropTypes.oneOf(['start', 'end']),
  isInvalid: PropTypes.bool,
  needsUpdating: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dateFormat: PropTypes.string.isRequired,
  roundUp: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  onPopoverToggle: PropTypes.func.isRequired,
  onPopoverClose: PropTypes.func.isRequired,
};
