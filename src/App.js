// react-router components
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routes from "./routes";
import Dashboard from './views/Dashboard/Dashboard';
import SignIn from './views/Pages/SignIn'
import SignUp from './views/Pages/SignUp'

function App() {
  return (
    <div className='container'>
      <h1>Marine Mammals</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li><a href="/dashboard">Manatee</a></li>
            <li><a href="/signin">Narwhal</a></li>
            <li><a href="/signup">Whale</a></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
