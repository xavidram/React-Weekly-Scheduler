import React from 'react';
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
        for(start; start <= end; start = start.clone().add(1, 'd')){
            if(start.day() === 0 || start.day() === 6){
                week.push({
                    isHoliday: false,
                    isWeekend: true,
                    date: start.format('MM/DD/YYYY'),
                    string: start.format('MMM Do'),
                    weekday: this.weekday[start.day()]
                });
            } else {
                week.push({
                    isHoliday: false,
                    isWeekend: false,
                    date: start.format('MM/DD/YYYY'),
                    string: start.format('MMM Do'),
                    weekday: this.weekday[start.day()]
                });
            }
            
        }
        return week;
    }

    render() {
        return(
            <div>
                <SchedulerHeader days={this.week} />
                <SchedulerContent/>
            </div>
        );
    }

}

export default Scheduler;
