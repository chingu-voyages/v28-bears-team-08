// import * as ActionTypes from './actionTypes';
//Q: Why not work as above?
import { ActionTypes } from './actionTypes';
import { AnyAction } from 'redux';

//Q: How to type user??
export interface AuthState {
  isAuthenticated: boolean;
  user: any;
  isLoading: boolean;
  errMsg: string;
}

//Q: prevStatus, nextStatus and ...state
//TODO: Action enum TYPES?? Why lines?
//Q: Can I say errMsg string and default the value to null?
export const authReducer = (
  state = { isAuthenticated: false, user: null, isLoading: true, errMsg: null },
  action: AnyAction
) => {
  switch (action.type) {
    case ActionTypes.AUTHENTICATE_USER_REQUEST:
      return { ...state, isLoading: true };
    case ActionTypes.AUTHENTICATE_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        isLoading: false,
        errMsg: null,
      };
    case ActionTypes.AUTHENTICATE_USER_FAILURE:
      return { ...state, isLoading: false, errMsg: action.payload };
    default:
      return state;
  }
};
