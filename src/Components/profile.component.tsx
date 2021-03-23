import { FunctionComponent, useState, useEffect } from 'react';
export interface User {
  name: string;
  role: string;
  appStatus?: string; //Q: how to conditionally require appStatus only when the role is publicUser?
}

const Profile: FunctionComponent = () => {
  const [user, setUser] = useState<User | null>(null);
  const name = (user && user.name) || 'Name missing..';
  useEffect(() => {
    //getProfile logic
  });
  return <h3>Good morning, {name}</h3>;
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
