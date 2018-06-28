import * as React from 'react';
import { Route } from "react-router";
import App from './App';
import SchoolName from './containers/first/firstTest';
import HelloName from './containers/second/secondTest';
import Infor from './containers/user/infor';

class RouteMap extends React.Component {
    public render() {
        return (
            <div>
                <Route path='/app' component={App} />
                <Route path='/containers/first' component={SchoolName}/>
                <Route path='/containers/second' component={HelloName}/>
                <Route path='/containers/user' component={Infor}/>
            </div>
            
        )
    }
}
 
export default RouteMap;