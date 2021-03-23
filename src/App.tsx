import { FunctionComponent, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/navbar.component';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Theme/theme';
import Login from './Components/login.component';
import Register from './Components/register.component';
import Profile from './Components/profile.component';
import Apply from './Components/apply.component';

const App: FunctionComponent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const handleAuth = (valueFromChild: boolean) =>
    setIsAuthenticated(valueFromChild);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar isAuthenticated={isAuthenticated} />
        <Switch>
          <Route
            exact
            path="/login"
            render={(props) => <Login {...props} handleAuth={handleAuth} />}
          />
          <Route
            exact
            path="/register"
            render={(props) => <Register {...props} handleAuth={handleAuth} />}
          />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/apply" component={Apply} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};
//TODO: check component name with Cesar.

export default App;

//Issue: cannot write <BroswerRouter> routers without endpoints. If UIDriver handles all network calls, then I need a better clarity into the UI Driver to make the front-end work with it.
//Issue:
