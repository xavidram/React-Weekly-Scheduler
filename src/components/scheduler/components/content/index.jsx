import React from 'react';
import './content.css';

import TimeBar from '../timebar';

class SchedulerContent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="scheduler-content">
                <TimeBar
                    starthour="8"
                    endhour="18"
                    segments="2"
                />
            </div>
        );
    }

}

export default SchedulerContent;
