import React from 'react';
import './timebar.css';
import moment from 'moment';

class TimeBar extends React.Component {

    constructor(props) {
        super(props);
        this.segments = this.props.segments;
        this.segMins = 60 / this.props.segments;
    }



    // Generate Array based on start and end value
    getRange(start, end) {
        return Array.from(
            {
                length: (parseInt(end, 10) + 1) - parseInt(start, 10)
            },
            (v, k) => k + parseInt(start, 10)
        );
    }

    generateColumn() {
        let start = moment(this.props.starthour, 'h');
        let end = moment(this.props.endhour, 'h');
        let hours = [];
        let diff = this.getRange(this.props.starthour, this.props.endhour);
        let date = start.clone();
        diff.map((hour, number) => {
            let segments = [];
            for(let i = 0; i < this.segments; i++) {
                if(date >= start && date <= end) {
                    segments.push({
                        date: date,
                        isStart: i === 0
                    });
                }
                date = date.clone().add(this.segMins, 'm');
            }
            if(segments.length > 0) {
                hours.push({segments: segments});
            }
        });
        return hours;
    }

    render() {
        let hours = this.generateColumn();
        let segments = hours.map(segment => {
            let x = segment.segments.map(s => {
                return(
                    <div class="segment">
                        {s.date.format('hh:mm A')}
                    </div>
                );
            });
            return(
                <div className="hour-segment">
                    {x}
                </div>
            );
        });
        return(
            <div className="scheduler-timebar-col">
                {segments}
            </div>
        );
    }

}

export default TimeBar;
