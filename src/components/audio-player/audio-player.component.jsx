import React, { useState, useRef, useEffect } from 'react';
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

import "../../components/audio-player/audio-player.styles.scss";


const AudioPlayer = ({song}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const audioPlayer = useRef();   
    const progressBar = useRef();   
    const animationRef = useRef();  

    useEffect(() => {
        const seconds = Number.isFinite(Math.floor(audioPlayer.current.duration)) ? Math.floor(audioPlayer.current.duration) : ' ';
        setDuration(seconds);
        progressBar.current.max = seconds;
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

    const calculateCurrentTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    }

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    }

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    }

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / progressBar.current.max * 100}%`)
        setCurrentTime(progressBar.current.value);
    }

    return (
        <div className={'audio-player'}>
            <audio ref={audioPlayer} src={song} preload="metadata"></audio>

            <div className={'button-player'}>
                <button onClick={togglePlayPause} className={'play-pause'}>
                    {isPlaying ? <FaPause className={'pause'} /> : <FaPlay className={'play'} />}
                </button>
            </div>

            <div className={'player'}>
                <div>
                    <input type="range" className={'progress-bar'} defaultValue="0" ref={progressBar} onChange={changeRange} />
                </div>
                <div className={'time-player'}>
                    <div className={'current-time'}>{calculateCurrentTime(currentTime)}</div>
                    <div className={'duration'}>{(duration && !isNaN(duration)) && calculateCurrentTime(duration)}</div>
                </div>
            </div>
        </div>
    )
}

export default AudioPlayer;