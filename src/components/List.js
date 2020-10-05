// import React, {useState} from 'react';
// import './../App.css';
// import sound_err from './../assets/zapsplat_multimedia_game_error_tone_007_24925.mp3'
// import sound_ok from './../assets/little_robot_sound_factory_Jingle_Win_Synth_01.mp3'
//
//
// class List extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             background: null,
//         };
//         this.saund_track = null;
//     }
//
//     componentDidUpdate = (prevProps) => {
//         if (prevProps.item.name !== this.props.item.name) {
//             this.setState({background: {backgroundColor: null}});
//         }
//     };
//
//     changeColor = (item) => {
//         this.props.handleClickList(true);
//         this.props.getSelectedItem(item.id);
//         let audio_teg = document.getElementById('audio');
//         if (this.props.random_item.id === item.id) {
//             this.setState({background: {backgroundColor: '#00bc8c'}});
//             this.props.changeButtonColor(true);
//             this.props.changeScore();
//             fetch(sound_ok)
//                 .then(response => {
//                     audio_teg.src = response.url;
//                     this.saund_track = response.url;
//                     audio_teg.play();
//                 })
//         } else {
//             this.setState({background: {backgroundColor: 'red'}});
//             this.props.handleSetScore(1);
//             fetch(sound_err)
//                 .then(response => {
//                     audio_teg.src = response.url;
//                     this.saund_track = response.url;
//                     audio_teg.play();
//                 })
//         }
//     };
//
//     render() {
//         const {item} = this.props;
//
//         return (
//
//             <div onClick={() => {
//                 this.changeColor(item)
//             }}>
//                 <span className='select-answer' style={this.state.background}></span>
//                 <p>{item.name}</p>
//                 <audio id='audio' controls src={this.saund_track} className='audio_teg'>
//                 </audio>
//             </div>
//         )
//     }
// }
//
//
// export default List



import React, {useState, } from 'react';
import './../App.css';
import sound_err from './../assets/zapsplat_multimedia_game_error_tone_007_24925.mp3'
import sound_ok from './../assets/little_robot_sound_factory_Jingle_Win_Synth_01.mp3'
import {useDispatch, useSelector} from "react-redux";


// class List extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             background: null,
//         };
//         // this.saund_track = null;
//     }

    // componentDidUpdate = (prevProps) => {
        // if (prevProps.item.name !== this.props.item.name) {
        //     this.setState({background: {backgroundColor: null}});
        // }
    // };

    // changeColor = (item) => {
        // this.props.handleClickList(true);
        // this.props.getSelectedItem(item.id);
        // let audio_teg = document.getElementById('audio');
        // if (this.props.random_item.id === item.id) {
        //     this.setState({background: {backgroundColor: '#00bc8c'}});
        //     this.props.changeButtonColor(true);
        //     this.props.changeScore();
        //     fetch(sound_ok)
        //         .then(response => {
        //             audio_teg.src = response.url;
        //             this.saund_track = response.url;
        //             audio_teg.play();
        //         })
        // } else {
        //     this.setState({background: {backgroundColor: 'red'}});
        //     this.props.handleSetScore(1);
        //     fetch(sound_err)
        //         .then(response => {
        //             audio_teg.src = response.url;
        //             this.saund_track = response.url;
        //             audio_teg.play();
        //         })
        // }
//     };
//
//     render() {
//         const {} = this.props;
//
//         return (
//
//             <div onClick={() => {
//                 this.changeColor()
//             }}>
//                 <span className='select-answer' style={this.state.background}></span>
//                 <p>{}</p>
//                 <audio id='audio' controls className='audio_teg'>
//                 </audio>
//             </div>
//         )
//     }
// }
//
//
// export default List


const List = (props) => {
    const [background, setBackground] = useState(null);
    const {item}= props;

    const dispatch = useDispatch();
    const random_number = useSelector(state => state.header.random_number);
    const selection_tab_menu = useSelector(state => state.header.selection_tab_menu);
    const birds_data = useSelector(state => state.header.birds_data);
    let random_item = birds_data[selection_tab_menu ][random_number];
    let saund_track;

    let set_data_for_audio = (kind_sound, audio_teg) => {
        fetch(kind_sound)
            .then(response => {
                audio_teg.src = response.url;
                saund_track = response.url;
                audio_teg.play();
            })
    };

    const changeColor = () => {
        let audio_teg = document.getElementById('audio');
        if (item.id === random_item.id) {
            setBackground({backgroundColor: '#00bc8c'});
            set_data_for_audio(sound_ok, audio_teg);
        } else {
            setBackground({backgroundColor: 'red'});
            set_data_for_audio(sound_err, audio_teg)
        }
    };


    return (
        <div onClick={() => {
            changeColor()
        }}>
            <span className='select-answer' style={background}></span>
            <p>{item.name}</p>
            <audio id='audio' controls className='audio_teg' src={saund_track}>
            </audio>
        </div>
    )
};

export default List