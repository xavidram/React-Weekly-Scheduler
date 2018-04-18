import React from 'react';
import PropTypes from 'prop-types';
import { range } from 'react-range-proptypes';
import './timebar.css';
import moment from 'moment';

class TimeBar extends React.Component {

    constructor(props) {
        super(props);
        this.segments = this.props.hourSegments;
        this.segMins = 60 / this.props.hourSegments;
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
        let start = moment(this.props.startHour, 'h');
        let end = moment(this.props.endHour, 'h');
        let hours = [];
        let diff = this.getRange(this.props.startHour, this.props.endHour);
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
        // add extra segment to ending hour
        hours.pop(hours.length - 1);
        return hours;
    }

    render() {
        let hours = this.generateColumn();
        let segments = hours.map((segment, ind) => {
            let x = segment.segments.map((s, i) => {
                return(
                    <div className="segment" key={'hour' + ind + 'segment' + i}>
                        {s.date.format('hh:mm A')}
                    </div>
                );
            });
            return(
                <div className="hour-segment" key={'hour' + ind}>
                    {x}
                </div>
            );
        });
        return(
            <div className="scheduler-timebar">
                {segments}
            </div>
        );
    }
}

TimeBar.propTypes = {
    hourSegments: PropTypes.oneOf([1, 2]),
    startHour: range(1, 24), // between 1 - 24 hrs
    endHour: range(1, 24), // between 1 - 24 hrs
};

export default TimeBar;
