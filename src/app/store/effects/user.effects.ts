import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usersActions from '../actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { UserService } from '../../services/user.service';

@Injectable()
export class UserEffects {
  constructor(
    private userService: UserService,
    private actions$: Actions
  ) {}

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.loadUser),
      //Comprobamos que la información esté llegando
      /* tap((data) => console.log('effect tap', data)), */
      mergeMap(
        ( action ) => this.userService.getUserById( action.id )
        .pipe(
          map( users => usersActions.loadUserSuccess({ usuario: users }) ),
          /* tap(data => console.log('getUsers effect', data )) */
          catchError( err => of(usersActions.loadUserError({ payload: err })))
        )
      )
    )
)}
