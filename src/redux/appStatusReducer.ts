import { ActionTypes } from './actionTypes';
import { AnyAction } from 'redux';
import { initialState } from './initialState';

export const appStatusReducer = (
  state = initialState.applications,
  action: AnyAction
) => {
  switch (action.type) {
    case ActionTypes.UPDATE_APPSTATUS_REQUEST:
      return state;
    case ActionTypes.UPDATE_APPSTATUS_SUCCESS:
      return state.map((app) =>
        app.id === action.payload.id
          ? {
              ...app,
              externalAppStatus: action.payload.isInternal
                ? app.externalAppStatus
                : action.payload.nextStatus,
              internalAppStatus: !action.payload.isInternal
                ? app.internalAppStatus
                : action.payload.nextStatus,
            }
          : app
      ); //{ id, isInternal, nextStatus }
    //If it is the same id, then update the internal and external app status. Otherwise, just retrun the app
    case ActionTypes.UPDATE_APPSTATUS_FAILURE:
      return { ...state };
    default:
      return state;
  }
};
//Q: isInternal?
