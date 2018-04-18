import React from 'react';
import PropTypes from 'prop-types';
import { range } from 'react-range-proptypes';
import './timecolumn.css';
import moment from 'moment';

class TimeColumn extends React.Component {

    constructor(props) {
        super(props);
        this.segments = this.props.hourSegments;
        this.segMins = 60 / this.props.hourSegments;
        this.color = ((this.props.data != null) ? this.props.data.color : '#FFF');
        console.log(this.props.data);
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

    cellStyle(date) {
        
        if(typeof this.props.data != 'undefined'){
            if(date.format('HH:mm') >= this.props.data.shift.Start && date.format('HH:mm') <= this.props.data.shift.End) {
                if(date.format('HH:mm') >= this.props.data.shift.bStart && date.format('HH:mm') <= this.props.data.shift.bEnd){
                    return {
                        backgroundColor: '#FFF'
                    };
                }
                return {
                    backgroundColor: this.color,
                    borderBottomColor: this.color
                }
            }
        }
        return { backgroundColor: '#FFF' };
    }

    generateColumn() {
        let start = moment(this.props.startHour, 'h');
        let end = moment(this.props.endHour, 'h');
        let hours = [];
        let diff = this.getRange(this.props.startHour, this.props.endHour);
        let date = start.clone();
        diff.map((hour, number) => {
            let segments = [];
            for (let i = 0; i < this.segments; i++) {
                if (date >= start && date <= end) {
                    let c = this.cellStyle(date);
                    segments.push({
                        key: String(this.props.weekday) + " " + String(hour) + " " + String(i),
                        date: date,
                        isStart: i === 0,
                        style: c
                    });
                }
                date = date.clone().add(this.segMins, 'm');
            }
            if (segments.length > 0) {
                hours.push({ segments: segments });
            }
        });
        /*
        let extra = hours[hours.length - 1].segments[0].date.clone().add(this.segMins, 'm');
        hours[hours.length - 1].segments.push({
            key: String(this.props.weekday) + " " + String(extra.hour()) + " 2",
            date: extra,
            isStart: false
        });
        */
        hours.pop(hours.length - 1);
        return hours;
    }

    render() {
        let hours = this.generateColumn();
        let segments = hours.map((segment, ind) => {
            let x = segment.segments.map((s, i) => {
                return (
                    <div className="segment" key={s.key} style={s.style}>
                    </div>
                );
            });
            return (
                <div className="hour-segment" key={'day' + this.props.weekday + 'hour' + ind}>
                    {x}
                </div>
            );
        });
        return (
            <div className="scheduler-timecolumn">
                {segments}
            </div>
        );
    }
}

TimeColumn.propTypes = {
    days: PropTypes.arrayOf(PropTypes.string),
    startDay: range(0, 6),
    endDay: range(0, 6),
    hourSegments: PropTypes.oneOf([1, 2, 4]),
    startHour: range(1, 24), // between 1 - 24 hrs
    endHour: range(1, 24), // between 1 - 24 hrs
    weekday: PropTypes.string
};

export default TimeColumn;
