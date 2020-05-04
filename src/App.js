import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

import CommandList from './CommandList';
import FullScreen from './FullScreen';
import styles from './App.module.css';

function App() {
  // const { hostname, protocol } = window.location;
  // const port = protocol === 'https:' ? 8081 : 8080;

  return (
    <Router>
      <div className={styles.app}>
        {/* <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink exact to="/">Command List</NavLink>
            </li>
            <li>
              <a href={`${protocol}//${hostname}:${port}`}>Tilt to Steer</a>
            </li>
          </ul>
        </nav>
 */}

        <Switch>
          <Route path="/">
            <CommandList></CommandList>
          </Route>
        </Switch>
        <FullScreen></FullScreen>
      </div>
    </Router>
  );
}

export default App;
