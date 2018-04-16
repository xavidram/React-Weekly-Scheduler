import React from 'react';
import './Home.css';

import Scheduler from '../../components/scheduler';

class Home extends React.Component {

    render() {
        return(
            <div className="Home">
                <Scheduler/>
            </div>
        );
    }

}

export default Home;