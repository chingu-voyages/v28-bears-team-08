import { FunctionComponent } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/navbar.component';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Theme/theme';
import Login from './Components/login.component';

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

//Issue: cannot write <BroswerRouter> routers without endpoints. If UIDriver handles all network calls, then I need a better clarity into the UI Driver to make the front-end work with it.
//Issue:
