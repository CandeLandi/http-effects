import { createReducer, on } from '@ngrx/store';
import { loadUser, loadUserSuccess, loadUserError } from '../actions';
import { Usuario } from '../../models/user.model';

export interface UserState {
   id      : string | null,
   user    : Usuario | null,
   loaded  : boolean,
   loading : boolean,
   error   : any
}

export const userInitialState: UserState = {
  id      : null,
  user    : null,
  loaded  : false,
  loading : false,
  error   : null
}

const _userReducer = createReducer(userInitialState,

    on(loadUser, (state, { id }) => ({
      ...state,
      loading: true,
      id: id
    })),

    on(loadUserSuccess, (state, {usuario}) => ({
      ...state,
      loading: false,
      loaded: true,
      user: { ...usuario }
    })),

    on(loadUserError, (state, { payload }) => ({
      ...state,
      loading: false,
      loaded: false,
      error: payload
/*       error: {
        url: payload.url,
        name: payload.name,
        error: payload.error
      } */

    })),
);

export function userReducer(state: any, action: any) {
    return _userReducer(state, action);
}
