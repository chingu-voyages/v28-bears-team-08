import { FunctionComponent, useState, useEffect } from 'react';
import AppStatus from './appstatus.component';
export interface User {
  name: string;
  role: string;
  email: string;
  //Q: how to conditionally require appStatus only when the role is publicUser?
}

export interface App {
  appStatus: string;
  dateOfBirth: string; //This should be string when received from database
  tin: string;
  gender: string;
  race: string;
  ethnicity: string;
  education: string;
  income: {
    has: boolean;
    monthly: number;
  };
}

const Profile: FunctionComponent = () => {
  const [user, setUser] = useState<User | null>(null);
  const [app, setApp] = useState<App | null>(null);

  const [comment, setComment] = useState(''); //Decide if comment is a standalone model or is part of another model. If latter, which model?
  const name = (user && user.name) || 'Name missing..';
  useEffect(() => {
    //get User Profile
    //get Application details to prepopulate if there is an existing application for the user
    //get Comment
  });
  //add onClick={() => history.push(Go to Apply component)}
  //
  return (
    <>
      <h3>Good morning, {name}</h3>
      {app && <h3>Status of your application is {app.appStatus}</h3>}
      {app && <AppStatus appStatus={app.appStatus} />}
      <button>Apply / Reapply</button>
    </>
  );
};

export default Profile;

//Schemas from backend github repo
// private static readonly userSchema = new Schema({
//   firstName: String,
//   lastName: String,
//   roles: [String],
// });
// private static readonly personSchema = new Schema({
//   firstName: String,
//   lastName: String,
//   dateOfBirth: Date,
//   tin: String,
//   gender: String,
//   race: String,
//   ethnicity: String,
//   education: String,
//   income: new Schema({
//     has: Boolean,
//     monthly: Number,
//   }),

//TODO: All these personal info should belong to Application schema, not Person. USER model should only have login credentials. User can then be reused for both internal and public users
