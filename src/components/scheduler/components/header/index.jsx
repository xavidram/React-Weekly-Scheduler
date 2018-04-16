import React from 'react';
import './header.css';
import * as FontAwesome from 'react-icons/lib/fa';

class SchedulerHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            days: this.props.days
        }
        this.weekday = [
            'Sunday', 'Monday', 'Tuesday',
            'Wednesday', 'Thursday', 'Friday', 'Saturday'
        ];
    }

    generateHeader() {
        return this.state.days.map(day => {
            return(
                <div key={'header-day-'+day.weekday} className="header-cols">
                    <b>{day.weekday}</b><br/>
                    <span>{day.string}</span>
                </div>
            );
        });
    }
        
    render() {
        let cols = this.generateHeader();
        return(
            <div className="scheduler-header">
                <div className="header-clock">
                    <FontAwesome.FaClockO size="32"/>
                </div>
                {cols}
            </div>
        );
    }

}

export default SchedulerHeader;
