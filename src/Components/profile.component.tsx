import { FunctionComponent, useState, useEffect } from 'react';
export interface User {
  name: string;
  role: string;
  appStatus?: string; //Q: how to conditionally require appStatus only when the role is publicUser?
}

const Profile: FunctionComponent = () => {
  const [user, setUser] = useState<User>(null);
  const name = (user && user.name) || 'Name missing..';
  useEffect(() => {
    //getProfile logic
  });
  return <h3>Good morning, {name}</h3>;
};

export default Profile;
