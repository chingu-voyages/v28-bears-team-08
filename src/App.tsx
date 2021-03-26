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
import ApplicantRouter from './Components/routers/applicantRouter.component';
import ManagerRouter from './Components/routers/managerRouter.component';
import StaffRouter from './Components/routers/staffRouter.component';

const user = { role: '' };

const App: FunctionComponent = () => {
  //TODO: Provide a switch statement for different roles
  const RoleBasedRouter =
    user.role === 'manager'
      ? ManagerRouter
      : user.role === 'staff'
      ? StaffRouter
      : ApplicantRouter;

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar isAuthenticated={!!user} />
        <RoleBasedRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
};
//TODO: check component name with Cesar.

export default App;

//Issue: cannot write <BroswerRouter> routers without endpoints. If UIDriver handles all network calls, then I need a better clarity into the UI Driver to make the front-end work with it.
//Issue:
