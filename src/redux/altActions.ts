import { Dispatch } from 'redux';
import { ActionTypes } from './actionTypes';
import {
  ExternalAppStatus,
  initialState,
  InternalAppStatus,
} from './initialState';

export interface AppStatusProps {
  id: string;
  isInternal: boolean;
  prevStatus: ExternalAppStatus | InternalAppStatus;
  nextStatus: ExternalAppStatus | InternalAppStatus;
  employeeId: string;
}

export const getAppStatus = (dispatch) => {
  dispatch(updateAppStatusLoading());
  return Response.then(
    (res) => {
      if (res.ok) {
        return res;
      } else {
        const err = new Error(`${res.status}`);
      }
    },
    (err) => {
      const errMsg = new Error(err.message);
      throw errMsg;
    }
  )
    .then((appStatus) => dispatch(updateAppStatusSuccess(appStatus)))
    .catch((err) => updateAppStatusFailed(err.message)); //TODO: fetch appstatus from backend through UIDriver. Assumig a respose is returned.
};

export const updateAppStatusLoading = () => {
  type: ActionTypes.UPDATE_APPSTATUS_REQUEST;
};
export const updateAppStatusFailed = (errMsg) => ({
  type: ActionTypes.AUTHENTICATE_USER_FAILURE,
  payload: errMsg,
});
export const updateAppStatusSuccess = (id, isInternal, nextStatus) => ({
  type: ActionTypes.UPDATE_APPSTATUS_SUCCESS,
  payload: { id, isInternal, nextStatus },
});

export const updateAppStatus = ({
  id,
  isInternal,
  prevStatus,
  nextStatus,
  employeeId,
}: AppStatusProps) => (dispatch: Dispatch) => {
  dispatch({ type: ActionTypes.UPDATE_APPSTATUS_REQUEST });
  //update appStatus in DB
  const response = 'ok';
  if (!response) {
    dispatch({ type: ActionTypes.UPDATE_APPSTATUS_FAILURE });
  } else {
    dispatch({
      type: ActionTypes.UPDATE_APPSTATUS_SUCCESS,
      payload: { id, isInternal, nextStatus },
    });
  }
};

export interface AuthCredentials {
  email: string;
  password: string;
}

export const authenticateUser = ({ email, password }: AuthCredentials) => (
  dispatch: Dispatch
) => {
  dispatch({ type: ActionTypes.AUTHENTICATE_USER_REQUEST });
  //get AUTHENTICATION from backend with email and password
  const user = initialState.user;
  if (!user) {
    dispatch({ type: ActionTypes.AUTHENTICATE_USER_FAILURE });
    //Q: error handling from backend? FE is assuming error message will be provided
  } else {
    dispatch({ type: ActionTypes.AUTHENTICATE_USER_SUCCESS, payload: user });
  }
};
//TODO: add errMsg as payload for failure?
//shouldn't the supply of actions be thunked?
