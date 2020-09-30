import React, {useState} from 'react';
import './../App.css';
import sound_err from './../assets/zapsplat_multimedia_game_error_tone_007_24925.mp3'
import sound_ok from './../assets/little_robot_sound_factory_Jingle_Win_Synth_01.mp3'


class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            background: null,
        };
        this.saund_track = null;
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.item.name !== this.props.item.name) {
            this.setState({background: {backgroundColor: null}});
        }
    };

    changeColor = (item) => {
        this.props.handleClickList(true);
        this.props.getSelectedItem(item.id);
        let audio_teg = document.getElementById('audio');
        if (this.props.random_item.id === item.id) {
            this.setState({background: {backgroundColor: '#00bc8c'}});
            this.props.changeButtonColor(true);
            this.props.changeScore();
            fetch(sound_ok)
                .then(response => {
                    audio_teg.src = response.url;
                    this.saund_track = response.url;
                    audio_teg.play();
                })
        } else {
            this.setState({background: {backgroundColor: 'red'}});
            this.props.handleSetScore(1);
            fetch(sound_err)
                .then(response => {
                    audio_teg.src = response.url;
                    this.saund_track = response.url;
                    audio_teg.play();
                })
        }
    };

    render() {
        const {item} = this.props;

        return (

            <div onClick={() => {
                this.changeColor(item)
            }}>
                <span className='select-answer' style={this.state.background}></span>
                <p>{item.name}</p>
                <audio id='audio' controls src={this.saund_track} className='audio_teg'>
                </audio>
            </div>
        )
    }
}


export default List
