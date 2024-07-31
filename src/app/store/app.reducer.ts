import { ActionReducerMap } from '@ngrx/store';
import * as reducers  from './reducers';


export interface AppState {
   usuarios: reducers.UsersState,
   usuario: reducers.UserState
}



export const appReducers: ActionReducerMap<AppState> = {
   usuarios: reducers.usersReducer ,
   usuario: reducers.userReducer

}
