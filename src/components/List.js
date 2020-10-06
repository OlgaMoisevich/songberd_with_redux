import React, {useEffect, useRef, useState,} from 'react';
import './../App.css';
import sound_err from './../assets/zapsplat_multimedia_game_error_tone_007_24925.mp3'
import sound_ok from './../assets/little_robot_sound_factory_Jingle_Win_Synth_01.mp3'
import {useDispatch, useSelector} from "react-redux";
import {clickOnBirds, pickBird, setGuessRandom} from "../redax/actions/actions";

const List = (props) => {
    const [background, setBackground] = useState(null);
    const {item}= props;

    const dispatch = useDispatch();
    const random_number = useSelector(state => state.header.random_number);
    const selection_tab_menu = useSelector(state => state.header.selection_tab_menu);
    const birds_data = useSelector(state => state.header.birds_data);
    let random_item = birds_data[selection_tab_menu ][random_number];
    let saund_track;

    const usePrevious = (value) => {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
            if (prevSelectTabMenu !== selection_tab_menu) {
                setBackground(null)
            }
        });
        return ref.current;
    };

    const prevSelectTabMenu = usePrevious(selection_tab_menu);

    const changeColor = () => {
        dispatch(clickOnBirds(true));
        dispatch(pickBird(item));
        let audio_teg = document.getElementById('audio');
        if (item.id === random_item.id) {
            setBackground({backgroundColor: '#00bc8c'});
            dispatch(setGuessRandom(item));
            set_data_for_audio(sound_ok, audio_teg);
        } else {
            setBackground({backgroundColor: 'red'});
            set_data_for_audio(sound_err, audio_teg)
        }
    };

    let set_data_for_audio = (kind_sound, audio_teg) => {
        fetch(kind_sound)
            .then(response => {
                audio_teg.src = response.url;
                saund_track = response.url;
                audio_teg.play();
            })
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