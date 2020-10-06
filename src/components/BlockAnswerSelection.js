import React from 'react';
import './../App.css';
import birdsData from "../data/birdsData";
import Item from "./List"
import {useSelector} from "react-redux";

const BlockAnswerSelection = () => {
    const selection_tab_menu = useSelector(state => state.header.selection_tab_menu);

    return (
        <div className="block-answer-selection">
            {
                birdsData[selection_tab_menu].map(item => {
                    return (
                        <Item
                            key={item.id}
                            item={item}
                        />
                    )
                })
            }
        </div>
    )
};

export default BlockAnswerSelection