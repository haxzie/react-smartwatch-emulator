import React, { useState } from 'react';
import style from './style.module.scss';
import WatchScreen from '../WatchScreen';

const screens = {
    MESSAGING: 1,
    MUSIC: 2,
    TIMER: 3
}

function Watch() {
    const [currentScreen, setCurrentScreen] = useState(screens.MESSAGING);

    return (
        <div className={style.watchContainer}>
            <div className={style.belt}></div> { /* BELT */}
            <div className={style.watchButton}></div> { /* Navigation buttons */}
            <div className={style.frame}> { /* FRAME */}
                <WatchScreen screen={currentScreen}/> { /* WATCH SCREEN */}
            </div>
            <div className={style.buttonArea}> { /* NAVIGATION BUTTONS */}
                <i className={`material-icons md-18 ${
                    currentScreen === screens.MESSAGING ? style.active : ''
                    }`} onClick={() => setCurrentScreen(screens.MESSAGING)}>question_answer</i>
                
                <i className={`material-icons md-18 ${
                    currentScreen === screens.MUSIC ? style.active : ''
                    }`} onClick={() => setCurrentScreen(screens.MUSIC)}>music_note</i>
                
                <i className={`material-icons md-18 ${
                    currentScreen === screens.TIMER ? style.active : ''
                    }`} onClick={() => setCurrentScreen(screens.TIMER)}>timer</i>
                
            </div>
        </div>
    )
}

export default Watch
export {
    screens
}