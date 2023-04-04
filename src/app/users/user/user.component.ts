import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { loadUser } from '../../store/actions';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent {

  user!: User | null;
  loading: boolean = false;
  error: any;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) {

    this.store.select('user').subscribe( ({user, loading, error}) => {
      this.user = user;
      this.loading = loading;
      this.error = error;
    })

    this.router.params.subscribe( ({id}) => {
      this.store.dispatch( loadUser({id}) );
    });
  }

}
