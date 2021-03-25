import { FunctionComponent } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../login.component';
import Register from '../register.component';
import MappList from '../mappList.component';
import AppDetails from '../appDetails.component';

export interface ManagerRouterProps {}

//TODO: pass handleAuth as a prop from redux store using useDispatch. Remove handleAuth prop passed in Routes
//TODO: pass different props depending on role

const ManagerRouter: FunctionComponent = () => {
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
      <Route exact path="/mapplist" component={MappList} />
      <Route exact path="/mapplist/:id" component={AppDetails} />
    </Switch>
  );
};

export default ManagerRouter;
