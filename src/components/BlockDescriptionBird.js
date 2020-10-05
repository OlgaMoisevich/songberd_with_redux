// import React from 'react';
// import bird from '../assets/bird.jpg';
// import birdsData from "../data/birdsData";
//
// const BlockDescriptionBird = (props) => {
//     const {select_groope, selected_item, click_down} = props;
//     const group = birdsData[`${select_groope - 1}`][selected_item-1];
//
//
//     return (
//         <div className="block-description-bird">
//             <div className="wrapper-description">
//
//                 {
//                     click_down ?
//                         <div>
//                             <div className="block-img-name-bird">
//                                 <div>
//                                     <img className="bird-image" src={group.image} alt=""/>
//                                 </div>
//                                 <div>
//                                     <h4>{group.name}</h4>
//                                     <p>{group.species}</p>
//                                     <audio src={group.audio} controls></audio>
//                                 </div>
//                             </div>
//                             <p>
//                                 {group.description}
//                             </p>
//                         </div>
//                         :
//                         <div>
//                             <p className="wrapper-description-size">Послушайте плеер</p>
//                             <p>Выберите птицу из списка</p>
//                         </div>
//                 }
//             </div>
//         </div>
//     )
// };
//
// export default BlockDescriptionBird



import React from 'react';
import bird from '../assets/bird.jpg';
import birdsData from "../data/birdsData";

const BlockDescriptionBird = (props) => {



    return (
        <div className="block-description-bird">
            <div className="wrapper-description">

                {
                    1 ?
                        <div>
                            <div className="block-img-name-bird">
                                <div>
                                    <img className="bird-image"  alt=""/>
                                </div>
                                <div>
                                    <h4>{}</h4>
                                    <p>{}</p>
                                    <audio  controls></audio>
                                </div>
                            </div>
                            <p>
                                {}
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
