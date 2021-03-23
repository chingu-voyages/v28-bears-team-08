import { FunctionComponent, useState, useEffect } from 'react';

export interface AppStatusProps {
  appStatus: string;
}

const AppStatus: FunctionComponent<AppStatusProps> = (props) => {
  return (
    <h3>Progress chart to COME</h3>
    // https://css-tricks.com/html5-progress-element/
    //progress chart with current status highlighted in whole flowchart
    //write a function that converts appStatus to a bracket in the progress bar
  );
};

export default AppStatus;
