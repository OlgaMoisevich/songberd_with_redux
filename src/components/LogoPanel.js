import React from 'react';
import logo from '../assets/logo.png';
import {useSelector} from "react-redux";

const LogoPanel = () => {
    const total_score_on_panel = useSelector(state => state.header.total_score_on_panel);

    return (
        <div className="App-header">
            <div>
                <img src={logo} className="logo" alt="logo"/>
            </div>
            <div>
                <h5 className="score">Score: {total_score_on_panel}</h5>
            </div>
        </div>
    )
};

export default LogoPanel