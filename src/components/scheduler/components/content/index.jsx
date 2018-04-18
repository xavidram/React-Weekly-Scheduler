import React from 'react';
import PropTypes from 'prop-types';
import { range } from 'react-range-proptypes';
import './content.css';

import TimeBar from '../timebar';
import DayColumn from '../daycolumn';
import { moment } from 'moment';

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
        let week = this.filterByWeekday(this.props.data);
        return this.state.days.map(day => {
            return(
               <DayColumn
                    data={week[day.day]}
                    key={'daycolumn-' + day.weekday}
                    weekday={day.weekday}
                    string={day.string}
                    startHour={this.props.startHour}
                    endHour={this.props.endHour}
                    hourSegments={this.props.hourSegments}
               />
            );
        });
    }

    filterByWeekday(data) {
        let week = []; let d = [];
        if (typeof data != 'undefined') {
            for(let day of this.state.days) {
                d = [];
                for(let usr of data) {
                    if(usr.shift.date === day.date) {
                        d.push(usr);
                    }
                }
                week.push(d);
            }
        }
        return week;
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
        weekday: PropTypes.string,
        day: PropTypes.number
    })),
    startDay: range(0, 6),
    endDay: range(0, 6),
    hourSegments: PropTypes.oneOf([1, 2]),
    startHour: range(1, 24), // between 1 - 24 hrs
    endHour: range(1, 24), // between 1 - 24 hrs
};

export default SchedulerContent;
