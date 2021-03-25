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
import ApplicantRouter from './routers/ApplicantRouter.component'
import ManagerRouter from './routers/ManagerRouter.component'
import StaffRouter from './routers/StaffRouter.component'

const App: FunctionComponent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const handleAuth = (valueFromChild: boolean) =>
    setIsAuthenticated(valueFromChild);
  //TODO: Provide a switch statement for different roles
  

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar isAuthenticated={isAuthenticated} />
        {switch(role) {//Todo: This needs to be defined and provided above
    case applicant:
      return <ApplicantRouter />
    case staff:
      return <StaffRouter />
    case manager:
      return <ManagerRouter />}
  }
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};
//TODO: check component name with Cesar.

export default App;

//Issue: cannot write <BroswerRouter> routers without endpoints. If UIDriver handles all network calls, then I need a better clarity into the UI Driver to make the front-end work with it.
//Issue:
