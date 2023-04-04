import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as usersActions from "../actions";
import { map, mergeMap, catchError, of } from "rxjs";
import { UserService } from '../../services/user.service';

@Injectable()
export class UsersEffects {

	constructor(
		private actions$: Actions,
		private UserService: UserService
	) { }

	loadUsers$ = createEffect(
		() => this.actions$.pipe(
			ofType(usersActions.loadUsers),
			mergeMap(
				() => this.UserService.getUsers()
					.pipe(
						map(users => usersActions.loadUsersSuccess({ users: users })),
						catchError( err => of( usersActions.loadUsersError({ payload: err }) ) )
					)
			)
		)
	);

}