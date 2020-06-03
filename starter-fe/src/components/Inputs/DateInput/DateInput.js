import React, { createRef, Component } from 'react';
import DateTimeField from 'react-datetime';
import moment from 'moment';
import classNames from 'classnames';

import './DateInput.scss';

class DateInput extends Component {
  constructor() {
    super();

    this.dateRef = createRef();
    this.openCalendar = this.openCalendar.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  openCalendar() {
    const target = this.dateRef.current;

    if (target && !this.props.disabled) {
      target.openCalendar();
    }
  }

  onChange(value) {
    const { onChange } = this.props;

    onChange(value.format());
  }

  render() {
    const { value, label, className, disabled } = this.props;

    return (
      <div className={classNames(className, 'common-input date-input')}>
        {label && (
          <label>{label}</label>
        )}
        <div className="date-input__calendar-icon">
          <img
            src={''}
            aria-hidden="true"
            onClick={this.openCalendar}
            alt="calendar"
          />
        </div>
        <DateTimeField
          timeFormat={false}
          closeOnSelect
          value={moment(value, DATE_FORMAT)}
          ref={this.dateRef}
          onChange={this.onChange}
          inputProps={{ readOnly: true, disabled: disabled }}
        />
      </div>
    )
  }
}

export { DateInput };
