import React, { Component } from 'react'
import style from './style.module.scss'
import ScreenHeader from '../ScreenHeader';

export default class Timer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            time: 0,
            start: 0,
            isOn: false
        }

        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }

    startTimer() {
        this.setState({
            time: this.state.time,
            start: Date.now() - this.state.time,
            isOn: true
        })
        this.timer = setInterval(() => this.setState({
            time: this.state.time+1
        }), 1000);
    }

    stopTimer() {
        this.setState({ isOn: false })
        clearInterval(this.timer)
    }

    resetTimer() {
        this.setState({ time: 0, isOn: false })
    }

    getTime() {
        let minutes = Math.round(this.state.time/60);
        if (minutes < 10) minutes = `0${minutes}`

        let seconds = this.state.time%60;
        if (seconds < 10) seconds = `0${seconds}`

        return `${minutes}:${seconds}`
    }

    render() {
        console.log(this.props.show)
        return (
            <div className={`${style.timerScreen} ${!this.props.show? 'hide':''}`}>
                <ScreenHeader title="Timer" />
                <div className={style.timerArea}>
                    <h3>{this.getTime()}</h3>
                    <div className={style.buttonRow}>
                        <i className="material-icons md-36" 
                            onClick={() => {
                                this.state.isOn? this.stopTimer(): this.startTimer()
                            }}>{ this.state.isOn? 'stop': 'play_arrow'}</i>
                        <i className="material-icons md-36" onClick={this.resetTimer}>restore   </i>
                    </div>
                </div>
            </div>
        )
    }
}
