
// import React, {useState, useEffect} from 'react';
// import './App.css';
// import {useDispatch, useSelector} from "react-redux";
//
// import LogoPanel from './components/LogoPanel';
// import NavBar from "./components/NavBar";
// import BlockQuestion from "./components/BlockQuestion";
// import BlockAnswerSelection from "./components/BlockAnswerSelection";
// import BlockDescriptionBird from "./components/BlockDescriptionBird";
// import Finish from "./components/Finish";
// import birdsData from "./data/birdsData";
// import bird from "./assets/bird_black.jpg";
// import {handlerNextNavbarTab} from "./redax/actions/actions";
//
//
// function App() {
//     const dispatch = useDispatch();
//     const select = useSelector(state=>state.header.selection_tab_menu);
//
//     const [selection_tab_menu, setSelectionMenu] = useState(1);
//     const [click_down, setClickClosePicture] = useState(false);
//     const [change_button_color, setchangeButtonColor] = useState(null);
//     const [selected_item, setSelectedItem] = useState(null);
//     const [bird_picture, setPicture] = useState({'pict': bird, 'name': '******'});
//     const [random_number, setRandomNumber] = useState(() => Math.floor(Math.random() * (6 - 0)) + 0);
//     const setRandomItem = () => Math.floor(Math.random() * (6 - 0)) + 0;
//     //Score
//     const [scoreForLogoPanel, setScoreForLogoPanel] = useState(0);
//     const [accum_err, setAccumErr] = useState(5);
//     let random_item;
//     const checkSel = (selection_tab) => {
//         return selection_tab === 7 ? 1 : selection_tab + 1
//     };
//
//     // for blockQuestion
//     if(selection_tab_menu!==7){
//          random_item = birdsData[`${selection_tab_menu - 1}`][random_number];
//     }
//
//
//     const handleClickNext = () => {
//         if (change_button_color === null) return;
//         setSelectionMenu(checkSel(selection_tab_menu));
//         setClickClosePicture(false);
//         setchangeButtonColor(null);
//         setRandomNumber(setRandomItem());
//         setPicture({'pict': bird, 'name': '******'});
//         setAccumErr(5);
//     };
//
//     const handleClickList = (value) => {
//         setClickClosePicture(value);
//     };
//     const changeButtonColor = (value) => {
//         if (value) {
//             setchangeButtonColor({backgroundColor: '#00bc8c'});
//             setPicture({'pict': random_item['image'], 'name': random_item['name']})
//         }
//     };
//     const getSelectedItem = (value) => {
//         setSelectedItem(value);
//     };
//
//     const changeScore = () => {
//         setScoreForLogoPanel(scoreForLogoPanel + accum_err);
//     };
//
//     const handleSetScore = (value) => {
//         setAccumErr(accum_err - value);
//     };
//
//     const newGame = () => {
//         // setSelectionMenu(1);
//         setScoreForLogoPanel(0);
//     };
//
//
//     return (
//         <div className="App">
//             <header>
//                 <LogoPanel scoreForLogoPanel={scoreForLogoPanel}/>
//                 <NavBar/>
//             </header>
//
//             {
//                 // selection_tab_menu !== 7
//                 select !== 7
//                     ? <div>
//                         <BlockQuestion bird_picture={bird_picture} random_item={random_item}/>
//                         <div className="block-answer">
//                             <BlockAnswerSelection selection_tab_menu={selection_tab_menu}
//                                                   random_item={random_item}
//                                                   handleClickList={handleClickList}
//                                                   changeButtonColor={changeButtonColor}
//                                                   changeScore={changeScore}
//                                                   getSelectedItem={getSelectedItem}
//                                                   handleSetScore={handleSetScore}
//                             />
//                             <BlockDescriptionBird click_down={click_down}
//                                                   selected_item={selected_item}
//                                                   select_groope={selection_tab_menu}
//                             />
//                         </div>
//                         <button className='footer_button'
//                                 onClick={handleClickNext}
//                                 onClick={()=> dispatch(handlerNextNavbarTab())}
//                                 style={change_button_color}
//                         > Next Level
//                         </button>
//                     </div>
//                     : <div className="block-answer">
//                         <Finish scoreForLogoPanel={scoreForLogoPanel}
//                                 newGame = {newGame}
//                         ></Finish>
//                     </div>
//             }
//         </div>
//     );
// }
//
// export default App;


import React, {useState, useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";


import birdsData from "./data/birdsData";
import LogoPanel from './components/LogoPanel';
import NavBar from "./components/NavBar";
import BlockQuestion from "./components/BlockQuestion";
import BlockAnswerSelection from "./components/BlockAnswerSelection";
import BlockDescriptionBird from "./components/BlockDescriptionBird";
import Finish from "./components/Finish";
import bird from "./assets/bird_black.jpg";
import {handlerNextNavbarTab, setRandomNumber} from "./redax/actions/actions";


function App() {
    const dispatch = useDispatch();
    const select = useSelector(state => state.header.selection_tab_menu);

    // const [selection_tab_menu, setSelectionMenu] = useState(1);
    // const [click_down, setClickClosePicture] = useState(false);
    // const [change_button_color, setchangeButtonColor] = useState(null);
    // const [selected_item, setSelectedItem] = useState(null);
    // const [bird_picture, setPicture] = useState({'pict': bird, 'name': '******'});
    // const [random_number, setRandomNumber] = useState(() => Math.floor(Math.random() * (6 - 0)) + 0);
    // const setRandomItem = () => Math.floor(Math.random() * (6 - 0)) + 0;
    // //Score
    // const [scoreForLogoPanel, setScoreForLogoPanel] = useState(0);
    // const [accum_err, setAccumErr] = useState(5);
    // let random_item;
    // const checkSel = (selection_tab) => {
    //     return selection_tab === 7 ? 1 : selection_tab + 1
    // };

    // for blockQuestion


    // const handleClickNext = () => {
    //     if (change_button_color === null) return;
    //     // setSelectionMenu(checkSel(selection_tab_menu));
    //     setClickClosePicture(false);
    //     setchangeButtonColor(null);
    //     setRandomNumber(setRandomItem());
    //     setPicture({'pict': bird, 'name': '******'});
    //     setAccumErr(5);
    // };

    // const handleClickList = (value) => {
    //     setClickClosePicture(value);
    // };
    // const changeButtonColor = (value) => {
    //     if (value) {
    //         setchangeButtonColor({backgroundColor: '#00bc8c'});
    //         setPicture({'pict': random_item['image'], 'name': random_item['name']})
    //     }
    // };
    // const getSelectedItem = (value) => {
    //     setSelectedItem(value);
    // };
    //
    // const changeScore = () => {
    //     setScoreForLogoPanel(scoreForLogoPanel + accum_err);
    // };
    //
    // const handleSetScore = (value) => {
    //     setAccumErr(accum_err - value);
    // };
    //
    // const newGame = () => {
    //     // setSelectionMenu(1);
    //     setScoreForLogoPanel(0);
    // };

    const nextTabHandler = () => {
        dispatch(handlerNextNavbarTab());
        dispatch(setRandomNumber());
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
                            <BlockAnswerSelection
                            />

                            <BlockDescriptionBird

                            />
                        </div>

                        <button className='footer_button'
                                onClick={() => nextTabHandler()}
                                // style={change_button_color}
                        > Next Level
                        </button>
                    </div>
                    : <div className="block-answer">
                        <Finish

                        ></Finish>
                    </div>
            }
        </div>
    );
}

export default App;
