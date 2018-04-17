import React from 'react';
import './Home.css';

import Scheduler from '../../components/scheduler';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            today: new Date(),
            hourSegments: 2, // 1 or 2 currently allowed
            startHour: 8, // in 24-hr
            endHour: 18, // in 24-hr
            startDay: 1, // Monday
            endDay: 5 // Friday
        }
    }

    render() {
        return(
            <div className="Home">
                <Scheduler/>
            </div>
        );
    }

}

export default Home;