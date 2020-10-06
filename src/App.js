import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import LogoPanel from './components/LogoPanel';
import NavBar from "./components/NavBar";
import BlockQuestion from "./components/BlockQuestion";
import BlockAnswerSelection from "./components/BlockAnswerSelection";
import BlockDescriptionBird from "./components/BlockDescriptionBird";
import Finish from "./components/Finish";
import {clickOnBirds, handlerNextNavbarTab, setGuessRandom, setRandomNumber} from "./redax/actions/actions";


function App() {
    const dispatch = useDispatch();
    const select = useSelector(state => state.header.selection_tab_menu);
    const bird_picture_name = useSelector(state => state.header.bird_picture_name);
    let change_button_color = null;

    if (typeof (bird_picture_name) === "object") {
        change_button_color = {backgroundColor: '#00bc8c'}
    }

    const nextTabHandler = () => {
        dispatch(handlerNextNavbarTab());
        dispatch(setRandomNumber());
        dispatch(setGuessRandom('******'));
        dispatch(clickOnBirds(false));
    };

    return (
        <div className="App">
            <header>
                <LogoPanel/>
                <NavBar/>
            </header>

            {
                select !== 6
                    ? <div>
                        <BlockQuestion/>
                        <div className="block-answer">
                            <BlockAnswerSelection/>
                            <BlockDescriptionBird/>
                        </div>

                        <button className='footer_button'
                                onClick={() => typeof (bird_picture_name) !== "object" || nextTabHandler()}
                                style={change_button_color}
                        > Next Level
                        </button>
                    </div>
                    : <div className="block-answer">
                        <Finish/>
                    </div>
            }
        </div>
    );
}

export default App;
