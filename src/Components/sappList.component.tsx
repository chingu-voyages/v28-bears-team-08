import { FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateAppStatus } from '../redux/actions';
import { appStatusReducer } from '../redux/appStatusReducer';
import { AppState } from '../redux/initialState';

export interface SappListProps {}
//get list from backend through UI Driver and put it in store
//
const SappList: FunctionComponent<SappListProps> = () => {
  const app = useSelector((state: AppState) => state.applications?.[0] || null);
  const user = useSelector((state: AppState) => state.user);

  console.log('APP in sappList: ', app);
  console.log('USER in sappList: ', user);
  const dispatch = useDispatch();
  const handleClick = () =>
    app &&
    dispatch(
      updateAppStatus({
        id: app.id,
        isInternal: true,
        prevStatus: app.internalAppStatus,
        nextStatus: 'UNDER_REVIEW',
        employeeId: user.id,
      })
    );

  return (
    <>
      <h3>Staff App List to COME as clickable list</h3>
      <button onClick={handleClick}>Change AppStatus</button>
    </>
  );
};

export default SappList;
