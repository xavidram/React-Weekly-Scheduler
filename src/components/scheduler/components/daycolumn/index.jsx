import React from 'react';
import PropTypes from 'prop-types';
import { range } from 'react-range-proptypes';
import './daycolumn.css';

import TimeColumn from '../timecolumn';

class DayColumn extends React.Component {
    constructor(props) {
        super(props);
        this.data = this.props.data;
    }

    render() {
        let cols = this.data.map((usr, index) => {
            return(
                <TimeColumn
                    key={'timecolumn-'+this.props.weekday + "-usr-"+usr.name}
                    data={usr}
                    weekday={this.props.weekday}
                    string={this.props.string}
                    startHour={this.props.startHour}
                    endHour={this.props.endHour}
                    hourSegments={this.props.hourSegments * 2}
                />
            );
        });
        return(
            <div className="scheduler-daycolumn">
                {cols}
            </div>
        );
    }
}

DayColumn.propTypes = {
    weekday: PropTypes.string,
    string: PropTypes.string,
    date: PropTypes.string,
    startHour: range(1, 24),
    endHour: range(1, 24),
    hourSegments: PropTypes.oneOf([1, 2, 4])
};

export default DayColumn;
