import { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';

//use React Table library to build whole dept list

export interface MappListProps {}
//get list from backend through UI Driver and put it in store
//
const MappList: FunctionComponent<MappListProps> = () => {
  return (
    <>
      <h3>Manager App List to COME as clickable list</h3>
    </>
  );
};

export default MappList;

//Q: how to combine applist into one and split them based on employee id based on access right? Each staff can only write on assigned list but can read all. Manager on write and read all.
