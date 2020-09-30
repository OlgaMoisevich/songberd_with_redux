import React from 'react';
import './../App.css';

const Finish = (props) => {
    return (
        <div className='finish-block'>
            <h1> Поздравляем!</h1>
            <p>Вы прошли викторину и набрали {props.scoreForLogoPanel} из 30 возможных баллов!</p>
            <button onClick={props.newGame}>Попробовать еще раз!</button>
        </div>
    )
};

export default Finish