import { FunctionComponent } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../login.component';
import Register from '../register.component';
import Profile from '../profile.component';
import Apply from '../apply.component';

export interface ApplicantRouterProps {}

//TODO: pass handleAuth as a prop form redux store

const ApplicantRouter: FunctionComponent = () => {
  return (
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
  );
};

export default ApplicantRouter;
