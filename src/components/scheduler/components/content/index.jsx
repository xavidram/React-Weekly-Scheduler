import React from 'react';
import PropTypes from 'prop-types';
import { range } from 'react-range-proptypes';
import './content.css';

import TimeBar from '../timebar';
import TimeColumn from '../timecolumn';

class SchedulerContent extends React.Component {

    constructor(props) {
        super(props);
        this.weekday = [
            'Sunday', 'Monday', 'Tuesday',
            'Wednesday', 'Thursday', 'Friday', 'Saturday'
        ];
        this.state = {
            days: this.props.days
        }
    }

    generateDayColumns() {
        return this.state.days.map(day => {
            return(
                <TimeColumn
                    key={'content-day-'+day.weekday}
                    weekday={day.weekday}
                    string={day.string}
                    startHour={this.props.startHour}
                    endHour={this.props.endHour}
                    hourSegments={this.props.hourSegments * 2}
                />
            );
        });
    }

    render() {
        let week = this.generateDayColumns();
        return(
            <div className="scheduler-content">
                <TimeBar
                    startHour={this.props.startHour}
                    endHour={this.props.endHour}
                    hourSegments={this.props.hourSegments}
                />
                {week}
            </div>
        );
    }
}

SchedulerContent.propTypes = {
    days: PropTypes.arrayOf(PropTypes.shape({
        isHoliday: PropTypes.bool,
        isWeekend: PropTypes.bool,
        date: PropTypes.string,
        string: PropTypes.string,
        weekday: PropTypes.string
    })),
    startDay: range(0, 6),
    endDay: range(0, 6),
    hourSegments: PropTypes.oneOf([1, 2]),
    startHour: range(1, 24), // between 1 - 24 hrs
    endHour: range(1, 24), // between 1 - 24 hrs
};

export default SchedulerContent;
