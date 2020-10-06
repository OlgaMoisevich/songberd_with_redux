import React from 'react';
import {useSelector} from "react-redux";

const BlockDescriptionBird = () => {
    const click_on_birds = useSelector(state => state.header.click_on_birds);
    const pick_bird = useSelector(state => state.header.pick_bird);


    return (
        <div className="block-description-bird">
            <div className="wrapper-description">
                {
                    click_on_birds ?
                        <div>
                            <div className="block-img-name-bird">
                                <div>
                                    <img className="bird-image" src={pick_bird.image} alt=""/>
                                </div>
                                <div>
                                    <h4>{pick_bird.name}</h4>
                                    <p>{pick_bird.species}</p>
                                    <audio controls src={pick_bird.audio}></audio>
                                </div>
                            </div>
                            <p>
                                {pick_bird.description}
                            </p>
                        </div>
                        :
                        <div>
                            <p className="wrapper-description-size">Послушайте плеер</p>
                            <p>Выберите птицу из списка</p>
                        </div>
                }
            </div>
        </div>
    )
};

export default BlockDescriptionBird
