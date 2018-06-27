import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import SchoolName from './firstTest';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  // <App />,
  <SchoolName/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
