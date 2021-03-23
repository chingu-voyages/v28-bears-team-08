import { FunctionComponent, useState, useEffect } from 'react';

import { App } from './profile.component';

//Q: How to handle nesting in interface?

const Apply: FunctionComponent = () => {
  const [app, setApp] = useState<App | null>(null);

  //app properties as pieces of state to come
  return (
    <h3>
      This is Apply component placeholder. Need the final schema to write form
    </h3>
    //application form controlled component to come
  );
};

export default Apply;
