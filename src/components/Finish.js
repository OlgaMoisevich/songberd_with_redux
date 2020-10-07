// import React from 'react';
// import './../App.css';
//
// const Finish = (props) => {
//     return (
//         <div className='finish-block'>
//             <h1> Поздравляем!</h1>
//             <p>Вы прошли викторину и набрали {props.scoreForLogoPanel} из 30 возможных баллов!</p>
//             <button onClick={props.newGame}>Попробовать еще раз!</button>
//         </div>
//     )
// };
//
// export default Finish



import React from 'react';
import './../App.css';
import {useDispatch, useSelector} from "react-redux";
import {setNewGame} from "../redax/actions/actions";

const Finish = () => {
    const dispatch = useDispatch();
    return (
        <div className='finish-block'>
            <h1> Поздравляем!</h1>
            <p>Вы прошли викторину и набрали {} из 30 возможных баллов!</p>
            <button onClick={()=>{dispatch(setNewGame())}}>Попробовать еще раз!</button>
        </div>
    )
};

export default Finish