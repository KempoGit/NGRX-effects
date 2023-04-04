import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { loadUsers } from '../../store/actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent {

  users!: User[];
  loading: boolean = false;
  error: any;

  constructor(private store: Store<AppState>) {

    this.store.select('users').subscribe( ({users, loading, error}) => {
      this.users = users;
      this.loading = loading;
      this.error = error;
    });

    this.store.dispatch( loadUsers() );

  }

}
