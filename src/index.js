import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Users from './App';
import * as serviceWorker from './serviceWorker';

for (let element of document.querySelectorAll('.user-container')) {
  ReactDOM.render (
    <Users nick={element.dataset.nick} isFool={element.dataset.fool} />,
    element
  )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
