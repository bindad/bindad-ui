import * as React from 'react';
import './App.css';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { Home } from './Home';

export class App extends React.Component {
    render() {
        return (
          <HashRouter>
            <Route exact={true} path="/" component={Home} />
          </HashRouter>
          );
        }
}

