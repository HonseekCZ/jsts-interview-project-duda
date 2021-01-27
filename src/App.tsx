import React, { FC, useCallback, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from 'react-router-dom';

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {
  CircularProgress,
} from '@material-ui/core';

import Home from './pages/Home';
import Repos from './pages/Repos';
import Organizations from './pages/Organizations';
import NotFound from './pages/NotFound';

import './App.css';

const useStyles = makeStyles(({
  toolbar: { display: 'flex', justifyContent: 'space-between' },
  link: { textDecoration: 'none' },
}));

const App: FC = () => {
  const classes = useStyles();

  const [user, setUser] = useState<string>();
  const [error, setError] = useState<string>();
  return (
    <Router>
      <AppBar color="primary" position="static" variant="outlined">
        {/* Navigation - all pages */}
        <Toolbar>
          <div>
            <Link className={classes.link} to="/">
              <Button>
                Home
              </Button>
            </Link>
            {user && (
              <>
                <Link className={classes.link} to="/repos">
                  <Button>
                    Repositories
                  </Button>
                </Link>
                <Link className={classes.link} to="/orgs">
                  <Button>
                    Organizations
                  </Button>
                </Link>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
      {/* {user === null && <Redirect to="/login" />} */}
      <main className="App">
        <Container maxWidth="sm">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/repos/:username" exact component={Repos} />
            <Route path="/orgs/:username" exact component={Organizations} />
            <Route component={NotFound} />
          </Switch>          
        </Container>
      </main>
    </Router>
  );
};

export default App;
