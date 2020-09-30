import React from 'react';
import './../App.css';
import birdsData from "../data/birdsData";
import Item from "./List"

const BlockAnswerSelection = (props) => {
    const {selection_tab_menu, random_item, handleClickList, changeButtonColor, getSelectedItem, changeScore, handleSetScore} = props;





    return (
        <div className="block-answer-selection">
            {
                birdsData[`${selection_tab_menu - 1}`].map(item => {
                    return (
                        <Item key={item.id}
                              item={item}
                              random_item={random_item}
                              handleClickList={handleClickList}
                              changeButtonColor={changeButtonColor}
                              changeScore={changeScore}
                              getSelectedItem={getSelectedItem}
                              handleSetScore = {handleSetScore}
                        />
                    )
                })
            }
        </div>
    )
};

export default BlockAnswerSelection
