import { FunctionComponent, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/navbar.component';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Theme/theme';

import ApplicantRouter from './Components/routers/applicantRouter.component';
import ManagerRouter from './Components/routers/managerRouter.component';
import StaffRouter from './Components/routers/staffRouter.component';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();
// const user = { role: '' };
const { user } = store.getState();

const App: FunctionComponent = () => {
  console.log('UsER in App.tsx: ', user);
  const RoleBasedRouter =
    user.role === 'manager'
      ? ManagerRouter
      : user.role === 'staff'
      ? StaffRouter
      : ApplicantRouter;
  //Q: take it out of app scope?
  //App.tsx is not the place to use useSelector or useDispatch because it's not wrapped in reduxt Provider. I can use it in its child components
  //I can use store.dispatch or store.getState directly here in App.tsx as store is available directly in this component
  //I only use useSelector and useDispatch in places where I do not have DIRECT access to store
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar isAuthenticated={!!user} />
          <RoleBasedRouter />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};
//TODO: check component name with Cesar.

export default App;

//Issue: cannot write <BroswerRouter> routers without endpoints. If UIDriver handles all network calls, then I need a better clarity into the UI Driver to make the front-end work with it.
//Issue:
