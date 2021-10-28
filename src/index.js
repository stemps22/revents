import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './app/layout/styles.css';
import App from './app/layout/App';
//import * as serviceWorker from './serviceWorker';

const rootEl = document.getElementById('root');

function render() {
  ReactDOM.render(<App />,rootEl)
}

if(module.hot) {
  module.hot.accept('./app/layout/App', function() {
    setTimeout(render);
  })
}

render();

//serviceWorker.unregister();// register to use offline
