import { FunctionComponent, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { App } from './profile.component';
import { AppState } from '../redux/initialState';
import { userInfo } from 'os';

//Q: How to handle nesting in interface?

const Apply: FunctionComponent = () => {
  const [app, setApp] = useState<App | null>(null);
  const user = useSelector((state: AppState) => state.user);
  console.log('USER in apply: ', user);

  //app properties as pieces of state to come
  return (
    <h3>
      This is Apply component placeholder. Need the final schema to write form
    </h3>
    //application form controlled component to come
  );
};

export default Apply;
