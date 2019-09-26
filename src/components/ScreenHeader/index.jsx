import React from 'react'
import style from './style.module.scss'

const getTime = () => {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes()}`
}

function ScreenHeader({ title }) {
    return (
        <div className={style.header}>
            <h1>{title}</h1>
            <p>{getTime()}</p>
        </div>
    )
}

export default ScreenHeader
