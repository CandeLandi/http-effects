import { Component, OnInit } from '@angular/core';
import { AppState } from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { loadUser } from '../../store/actions/user.action';
import { Usuario } from '../../models/user.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {

   usuario!: Usuario | any;
   loading: boolean = false;
   error: any;

  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>){}


  ngOnInit(): void {

   this.store.select('usuario').subscribe( ({ user, loading, error }) => {
      this.usuario = user;
      this.loading = loading;
      this.error = error
    });


this.router.params.subscribe( ({id }) => {

  this.store.dispatch( loadUser({ id }))
})

}}
