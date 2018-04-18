import React from 'react';
import './header.css';


class AppHeader extends React.Component {

    render() {
        return(
            <div className="UTRGV-Header">
                <div className="UTRGV-Logo">
                </div>
                <div className="UTRGV-Tagline" >
                    <h2>ReactJS CSS Grid Layout Scheduler</h2>
                </div>
            </div>
        );
    }

}

export default AppHeader;