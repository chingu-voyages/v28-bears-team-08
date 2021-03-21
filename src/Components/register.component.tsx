import { FunctionComponent } from 'react';

export interface AuthProps {
  handleAuth: (value: boolean) => void;
}

const Register: FunctionComponent<AuthProps> = ({ handleAuth }) => {
  handleAuth(true);
  return <h2>This is Register component</h2>;
};

export default Register;
