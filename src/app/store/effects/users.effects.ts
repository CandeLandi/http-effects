import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usersActions from '../actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { UserService } from '../../services/user.service';

@Injectable()
export class UsersEffects {
  constructor(
    private userService: UserService,
    private actions$: Actions
  ) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.loadUsers),
      //Comprobamos que la información esté llegando
      /* tap((data) => console.log('effect tap', data)), */
      mergeMap(
        () => this.userService.getUsers()
        .pipe(
          map( usuarios => usersActions.loadUsersSuccess({ usuarios }) ),
          /* tap(data => console.log('getUsers effect', data )) */
          catchError( err => of(usersActions.loadUsersError({ payload: err })))
        )
      )
    )
  );

}
