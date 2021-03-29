import { FunctionComponent } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../login.component';
import Register from '../register.component';
import MappList from '../mappList.component';
import RenderAppWithId from '../renderAppWithId.component';

export interface ManagerRouterProps {}

//TODO: pass handleAuth as a prop from redux store using useDispatch. Remove handleAuth prop passed in Routes
//TODO: pass different props depending on role

const ManagerRouter: FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/mapplist" component={MappList} />
      <Route exact path="/mapplist/:id" component={RenderAppWithId} />
    </Switch>
  );
};

export default ManagerRouter;
