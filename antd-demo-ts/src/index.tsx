import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import '../node_modules/antd/dist/antd.css';
import RegisterServiceWorker from './registerServiceWorker';
import RouteMap from './menuConfig';
ReactDOM.render((
  <BrowserRouter>
   <RouteMap />
  </BrowserRouter>
),
  document.getElementById('root') as HTMLElement
);
 RegisterServiceWorker();
