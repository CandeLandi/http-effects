import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/user.model';

export const loadUsers = createAction('[Users] Load Users');

export const loadUsersSuccess = createAction(
  '[Users] Load Users Success',
  props< { usuarios: Usuario[] }>()

);

export const loadUsersError = createAction(
  '[Users] Load Users Success',
  props< { payload: any }>()
);
