import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { Usuario } from '../models/user.model';
import { AppState } from '../store/app.reducer';
import { Store } from '@ngrx/store';
import { loadUsersError, loadUsersSuccess } from '../store/actions';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private url = 'https://reqres.in/api'

  constructor(
    private http: HttpClient ) { }

  getUsers(){
    return this.http.get(`${ this.url }/users?per_page=12&delay=1`)
     .pipe(
      map( (resp : any) => resp['data'] ),
     )
  }

  getUserById( id: string ){
    return  this.http.get(`${this.url}/users/${ id }`)
    .pipe(
     map( (resp : any) => resp['data'] ),
    )
 }
}
