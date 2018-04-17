import React from 'react';
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
                    starthour="8"
                    endhour="18"
                    segments="4"
                />
            );
        });
    }

    render() {
        let week = this.generateDayColumns();
        return(
            <div className="scheduler-content">
                <TimeBar
                    starthour="8"
                    endhour="18"
                    segments="2"
                />
                {week}
            </div>
        );
    }

}

export default SchedulerContent;
