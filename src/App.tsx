import { FC } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Home from './pages/Home';
import Repos from './pages/Repos';
import Organizations from './pages/Organizations';
import NotFound from './pages/NotFound';

import './App.css';

const App: FC = () => {
  return (
    <Router>      
      <main className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/repos/:username" exact component={Repos} />
          <Route path="/orgs/:username" exact component={Organizations} />
          <Route component={NotFound} />
        </Switch>          
      </main>
    </Router>
  );
};

export default App;
