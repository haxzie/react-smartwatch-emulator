import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './styles/normalize.css';
import './styles/global.scss';
import WebfontLoader from '@dr-kobros/react-webfont-loader';

// webfontloader configuration object. *REQUIRED*.
const config = {
    google: {
        families: ['Material Icons', 'Roboto'],
    }
};

ReactDOM.render(
    <WebfontLoader config={config}>
        <App />
    </WebfontLoader>,
    document.getElementById('root'));

