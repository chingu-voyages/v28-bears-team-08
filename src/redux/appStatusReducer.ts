import { ActionTypes } from './actionTypes';
import { AnyAction } from 'redux';

export const appStatusReducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.UPDATE_APPSTATUS_REQUEST:
      return { ...state };
    case ActionTypes.UPDATE_APPSTATUS_SUCCESS:
      return { ...state };
    case ActionTypes.UPDATE_APPSTATUS_FAILURE:
      return { ...state };
    default:
      return state;
  }
};
