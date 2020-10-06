import React from 'react';
import logo from '../assets/logo.png';

class LogoPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App-header">
                <div>
                    <img src={logo} className="logo" alt="logo"/>
                </div>
                <div>
                    <h5 className="score">Score: {}</h5>
                </div>
            </div>
        )
    }
};

export default LogoPanel