import React from 'react';
import {useSelector} from "react-redux";
import bird from "./../assets/bird_black.jpg";


const BlockQuestion = () => {
    const selection_tab_menu = useSelector(state => state.header.selection_tab_menu);
    const birds_data = useSelector(state => state.header.birds_data);
    const random_number = useSelector(state => state.header.random_number);
    const bird_picture_name = useSelector(state => state.header.bird_picture_name);
    let random_item;

    if (selection_tab_menu !== 6) {
        random_item = birds_data[selection_tab_menu][random_number];
    }

    return (
        <div className="block-question">
            <div>
                <img className="bird-image" src={bird_picture_name.image || bird} alt=""/>
            </div>
            <div className="block-audio">
                <div>
                    <h3>{bird_picture_name.name || bird_picture_name}</h3>
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
