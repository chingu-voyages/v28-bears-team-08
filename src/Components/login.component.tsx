import { FunctionComponent } from 'react';

export interface AuthProps {
  handleAuth: (value: boolean) => void;
}

const Login: FunctionComponent<AuthProps> = ({ handleAuth }) => {
  handleAuth(true);
  return (
    <>
      <h2>This is login component</h2>
    </>
  );
};

export default Login;

// export interface AuthProps {
//   handleAuth: (value: boolean) => void;
// }

// export const Login: React.FunctionComponent<AuthProps> = ({handleAuth}) => { ...
