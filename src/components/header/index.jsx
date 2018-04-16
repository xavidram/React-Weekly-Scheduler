import React from 'react';
import './header.css';


class AppHeader extends React.Component {

    render() {
        return(
            <div className="UTRGV-Header">
                <div className="UTRGV-Logo">
                    <img src={process.env.PUBLIC_URL + 'imgs/logo.png'} alt="UTRGV"/>
                </div>
                <div className="UTRGV-Tagline" >
                    <h2>The University of Texas Rio Grande Valley</h2>
                </div>
            </div>
        );
    }

}

export default AppHeader;