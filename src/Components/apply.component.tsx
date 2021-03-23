import { FunctionComponent, useState, useEffect } from 'react';
export interface ApplyProps {
  appStatus: String;
  dateOfBirth: Date;
  tin: String;
  gender: String;
  race: String;
  ethnicity: String;
  education: String;
  // income: new Schema({
  //   has: Boolean,
  //   monthly: Number,
  // })
}
//Q: How to handle nesting in interface?

const Apply: FunctionComponent<ApplyProps> = () => {
  const [app, setApp] = useState<ApplyProps | null>(null);
  //app properties as pieces of state to come
  return (
    <h3>
      This is Apply component placeholder. Need the final schema to write form
    </h3>
    //application form controlled component to come
  );
};

export default Apply;
