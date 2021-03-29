import { FunctionComponent } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../login.component';
import Register from '../register.component';
import SappList from '../sappList.component';
import RenderAppWithId from '../renderAppWithId.component';

export interface ManagerRouterProps {}

//TODO: pass handleAuth as a prop form redux store
//TODO: pass different props depending on role
//TODO: populate the right list to assigned staff

const ManagerRouter: FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/sapplist" component={SappList} />
      <Route exact path="/sapplist/:id" component={RenderAppWithId} />
    </Switch>
  );
};

export default ManagerRouter;
