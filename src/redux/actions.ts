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

const updateAppStatus = ({
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

const authenticateUser = ({ email, password }: AuthCredentials) => (
  dispatch: Dispatch
) => {
  dispatch({ type: ActionTypes.AUTHENTICATE_USER_REQUEST });
  //get AUTHENTICATION from backend with email and password
  const user = initialState.user;
  if (!user) {
    dispatch({ type: ActionTypes.AUTHENTICATE_USER_FAILURE });
  } else {
    dispatch({ type: ActionTypes.AUTHENTICATE_USER_SUCCESS, payload: user });
  }
};
