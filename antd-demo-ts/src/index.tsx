import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import '../node_modules/antd/dist/antd.css';
import RegisterServiceWorker from './registerServiceWorker';
import RouteMap from './menuConfig';
import './css/layout.css';
ReactDOM.render((
  <div>
    <BrowserRouter>
      <RouteMap />
    </BrowserRouter>
  </div>
),
  document.getElementById('root') as HTMLElement
);
RegisterServiceWorker();
