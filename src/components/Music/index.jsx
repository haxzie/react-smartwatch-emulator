import React, { useState, useEffect } from 'react'
import style from './style.module.scss'
import ScreenHeader from '../ScreenHeader';

const songs = [
    {
        name: 'Truth Hurts',
        artist: 'Lizzo',
        art: 'https://charts-static.billboard.com/img/2019/05/lizzo-w3u-truth-hurts-tmm-155x155.jpg',
        url: 'http://www.panacherock.com/downloads/mp3/01_-_Stormy_Weather.mp3'
    },
    {
        name: 'Senorita',
        artist: 'Shawn & Camilia',
        art: 'https://charts-static.billboard.com/img/2019/06/shawn-mendes-drf-senorita-qa7-155x155.jpg',
        url: 'http://www.panacherock.com/downloads/mp3/01_Afterlife.mp3'
    },
    {
        name: 'Bad Guy',
        artist: 'Bellie Eilish',
        art: 'https://charts-static.billboard.com/img/2019/04/billie-eilish-1e3-bad-guy-g9n-155x155.jpg',
        url: 'http://www.panacherock.com/downloads/mp3/01_Raccoon_Song.mp3'
    },
    {
        name: 'Someone you loved',
        artist: 'Lewis Capaldi',
        art: 'https://charts-static.billboard.com/img/2019/03/lewis-capaldi-s2h-someone-you-loved-esv-155x155.jpg',
        url: 'http://www.panacherock.com/downloads/mp3/03_New_Radio.mp3'
    }
]

function MusicScreen({ show }) {

    const [currentSong, changeSong] = useState(0);
    const [isPlaying, togglePlay] = useState(false);
    const [audio, setAudio] = useState(new Audio(songs[0].url));

    useEffect(
        () => {
            console.log('Playin')
            isPlaying ? audio.play() : audio.pause();
        }, [isPlaying]
    );

    useEffect(
        () => {
            setAudio(new Audio(songs[currentSong].url))
        }, [currentSong]
    )

    useEffect(() => {
        return () => {
            audio.pause();
            setAudio(null)
            //togglePlay(false);
        }
    }, []);


    const next = () => {
        togglePlay(false);
        if (currentSong < songs.length - 1) {
            changeSong(currentSong + 1)
        } else {
            changeSong(0)
        }
    }

    const previous = () => {
        togglePlay(false)
        if (currentSong > 0) {
            changeSong(currentSong - 1);
        } else {
            changeSong(songs.length - 1)
        }
    }

    return (
        <div className={`${style.musicScreen} ${!show? 'hide':''}`}>
            <ScreenHeader title="Music" />
            <div className={style.playerArea}>
                <img className={style.albumArt} src={songs[currentSong].art} alt="" />
                <h4 className={style.title}>{songs[currentSong].name}</h4>
                <h5 className={style.artist}>{songs[currentSong].artist}</h5>
                <div className={style.buttonRow}>
                    <i className="material-icons md-36" onClick={next}>fast_rewind</i>
                    <i className="material-icons md-48" onClick={() => togglePlay(!isPlaying)}>{isPlaying ? 'pause' : 'play_arrow'}</i>
                    <i className="material-icons md-36" onClick={previous}>fast_forward</i>
                </div>
            </div>
        </div>
    )

}

export default MusicScreen
