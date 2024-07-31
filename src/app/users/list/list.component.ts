import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Usuario } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { loadUser, loadUsers, loadUsersSuccess } from '../../store/actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit{

  usuarios: Usuario[] = [];
  loading: boolean = false;
  error: any;

  constructor(
    private store: Store<AppState>
    ) {}

  ngOnInit(): void {


    this.store.select('usuarios').subscribe( ({ usuarios: users, loading, error }) => {
      this.usuarios = users ;
      this.loading = loading;
      this.error = error
    });
    //mediante el store
     this.store.dispatch(loadUsers())

  }


}
