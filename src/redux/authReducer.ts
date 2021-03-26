// import * as ActionTypes from './actionTypes';
//Q: Why not work as above?
import { ActionTypes } from './actionTypes';
import { AnyAction } from 'redux';
import { initialState } from './initialState';

//Q: How to type user??

//Q: prevStatus, nextStatus and ...state
//TODO: Action enum TYPES?? Why lines?
//Q: Can I say errMsg string and default the value to null?
export const authReducer = (state = initialState.user, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.AUTHENTICATE_USER_REQUEST:
      return state;
    case ActionTypes.AUTHENTICATE_USER_SUCCESS:
      return action.payload;
    case ActionTypes.AUTHENTICATE_USER_FAILURE:
      return state;
    default:
      return state;
  }
};
