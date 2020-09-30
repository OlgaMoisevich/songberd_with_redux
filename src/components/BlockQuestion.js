import React from 'react';


const BlockQuestion = (props) => {
    const {bird_picture, random_item} = props;

    return (
        <div className="block-question">
            <div>
                <img className="bird-image" src={bird_picture['pict']} alt=""/>
            </div>
            <div className="block-audio">
                <div>
                    <h3>{bird_picture['name']}</h3>
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
}

export default BlockQuestion
