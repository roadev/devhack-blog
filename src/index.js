import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App
    title="Hello React!"
    body="This is the post body"
  />,
  document.getElementById('root')
);
registerServiceWorker();
