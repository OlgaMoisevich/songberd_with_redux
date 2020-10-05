// import React from 'react';
//
//
// const BlockQuestion = (props) => {
//     const {bird_picture, random_item} = props;
//
//     return (
//         <div className="block-question">
//             <div>
//                 <img className="bird-image" src={bird_picture['pict']} alt=""/>
//             </div>
//             <div className="block-audio">
//                 <div>
//                     <h3>{bird_picture['name']}</h3>
//                 </div>
//                 <div>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                     <audio controls src={random_item['audio']}>
//                     </audio>
//                 </div>
//             </div>
//         </div>
//     )
// }
//
// export default BlockQuestion


import React from 'react';
import {useSelector} from "react-redux";


const BlockQuestion = () => {
    const selection_tab_menu = useSelector(state => state.header.selection_tab_menu);
    const birds_data = useSelector(state => state.header.birds_data);
    const random_number = useSelector(state => state.header.random_number);
    const bird_picture_name = useSelector(state => state.header.bird_picture_name);
    let random_item ;

    if (selection_tab_menu !== 6) {
        random_item = birds_data[selection_tab_menu ][random_number];
    }

    return (
        <div className="block-question">
            <div>
                <img className="bird-image"  alt=""/>
            </div>
            <div className="block-audio">
                <div>
                    <h3>{bird_picture_name}</h3>
                </div>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <audio controls src={random_item['audio']}>
                    </audio>
                </div>
            </div>
        </div>
    )
};

export default BlockQuestion
