import React, { Component } from 'react'
import style from './style.module.scss'
import { Scrollbars } from 'react-custom-scrollbars';
import ScreenHeader from '../ScreenHeader';

const messages = [
    {
        from: 'Jhon Doe',
        message: 'Hello There! How are you doing?'
    },
    {
        from: 'Alex',
        message: 'Dinner tonight?'
    },
    {
        from: 'Michele',
        message: 'In a meeting, call me later :)'
    }
]

export default class Messaging extends Component {

    state = {
        showPopup: false,
        currentMessage: 0
    }

    getMessages = () => {
        return messages.map((item, index) => {
            return <div
                key={index}
                className={style.messageItem}
                onClick={() => { this.setState({ showPopup: true, currentMessage: index }) }}>
                <h4>{item.from}</h4>
                <p>{item.message}</p>
            </div>
        })
    }
    render() {
        return (
            <Scrollbars className={`${style.messagingScreen} ${!this.props.show? 'hide':''}`} autoHide>
                <ScreenHeader title="Messages" />
                <div className={style.messageList}>
                    {this.getMessages()}
                </div>
                {

                    this.state.showPopup? <div className={style.messagePopup}>
                        <div className={style.header}>
                            <i className="material-icons" onClick={() => { this.setState({ showPopup: false })}}>clear</i>
                        </div>
                        <h4>{messages[this.state.currentMessage].from}</h4>
                        <p>{messages[this.state.currentMessage].message}</p>
                    </div> : <></>
                }
            </Scrollbars>
        )
    }
}
