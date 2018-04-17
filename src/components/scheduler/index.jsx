import React from 'react';
import PropTypes from 'prop-types';
import { range } from 'react-range-proptypes';
import './scheduler.css';
import moment from 'moment';

// Import Scheduler Components as needed
import SchedulerHeader from './components/header';
import SchedulerContent from './components/content';

class Scheduler extends React.Component {

    constructor(props) {
        super(props);
        this.weekday = [
            'Sunday', 'Monday', 'Tuesday',
            'Wednesday', 'Thursday', 'Friday', 'Saturday'
        ];
        this.week = this.generateWeek();
    }

    generateWeek() {
        let start = moment().startOf('week');
        let end = moment().endOf('week');
        let week = [];
        for (start; start <= end; start = start.clone().add(1, 'd')) {
            if (start.day() === 0 || start.day() === 6) {
                week.push({
                    isHoliday: false,
                    isWeekend: true,
                    date: start.format('MM/DD/YYYY'),
                    string: start.format('MMM Do'),
                    weekday: this.weekday[start.day()],
                    day: start.day()
                });
            } else {
                week.push({
                    isHoliday: false,
                    isWeekend: false,
                    date: start.format('MM/DD/YYYY'),
                    string: start.format('MMM Do'),
                    weekday: this.weekday[start.day()],
                    day: start.day()
                });
            }

        }
        return week;
    }
    
    render() {
        return (
            <div>
                <SchedulerHeader
                    days={this.week}
                    startDay={this.props.startDay}
                    endDay={this.props.endDay}
                    hourSegments={this.props.hourSegments}
                />
                <SchedulerContent
                    data={this.props.data}
                    days={this.week}
                    startDay={this.props.startDay}
                    endDay={this.props.endDay}
                    startHour={this.props.startHour}
                    endHour={this.props.endHour}
                    hourSegments={this.props.hourSegments}
                />
            </div>
        );
    }
}

// Prop Typechecking
Scheduler.propTypes = {
    hourSegments: PropTypes.oneOf([1, 2]),
    startHour: range(1, 24), // between 1 - 24 hrs
    endHour: range(1, 24), // between 1 - 24 hrs
    startDay: range(0, 6), // sunday -  saturday
    endDay: range(0, 6) // sunday - saturday
};

export default Scheduler;
