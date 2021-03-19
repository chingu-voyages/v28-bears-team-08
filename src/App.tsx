import { FunctionComponent } from 'react';
import './App.css';

const App: FunctionComponent = ({ children }) => {
  return (
    <>
      <h1 className="app">test</h1>
      {children}
    </>
  );
};

export default App;
