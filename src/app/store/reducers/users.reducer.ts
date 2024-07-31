import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersSuccess, loadUsersError } from '../actions';
import { Usuario } from '../../models/user.model';

export interface UsersState {
  usuarios: Usuario[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usersInitialState: UsersState = {
  usuarios: [],
  loaded: false,
  loading: false,
  error: null,
};

const _usersReducer = createReducer(
  usersInitialState,

  on(loadUsers, state => ({ ...state, loading: true })),

  on(loadUsersSuccess, (state, { usuarios }) => ({
    ...state,
    loading: false,
    loaded: true,
    usuarios: [...usuarios],
  })),

  on(loadUsersError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload
/*     error: {
      url: payload.url,
      name: payload.name,
      error: payload.error
    } */
  }))
);

export function usersReducer(state: any, action: any) {
  return _usersReducer(state, action);
}
