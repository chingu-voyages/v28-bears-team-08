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
//isInternal: instead of using two actions for updating internal state and external state, isInternal:true is used to signify internalAppStatus

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
