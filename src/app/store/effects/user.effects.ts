import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as userActions from "../actions";
import { map, mergeMap, catchError, of } from "rxjs";
import { UserService } from '../../services/user.service';

@Injectable()
export class UserEffects {

	constructor(
		private actions$: Actions,
		private UserService: UserService
	) { }

	loadUser$ = createEffect(
		() => this.actions$.pipe(
			ofType(userActions.loadUser),
			mergeMap(
				(action) => this.UserService.getUserById(action.id)
					.pipe(
						map(user => userActions.loadUserSuccess({ user: user })),
						catchError( err => of( userActions.loadUserError({ payload: err }) ) )
					)
			)
		)
	);

}