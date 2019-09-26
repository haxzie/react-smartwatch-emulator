import React, { Component } from 'react';
import style from './style.module.scss';
import { screens } from '../Watch';

import Messaging from '../Messaging';
import Music from '../Music';
import Timer from '../Timer';

export default class WatchScreen extends Component {

    isCurrentScreen = (id) => {
        return id === this.props.screen
    }

    render() {
        return (
            <div className={style.watchScreen}>
                <Messaging show={this.isCurrentScreen(screens.MESSAGING)}/>
                <Music show={this.isCurrentScreen(screens.MUSIC)}/>
                <Timer show={this.isCurrentScreen(screens.TIMER)}/>
            </div>
        )
    }
}
