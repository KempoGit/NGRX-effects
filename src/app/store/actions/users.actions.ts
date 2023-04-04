import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const loadUsers = createAction(
    '[Users Component] Load Users'
);

export const loadUsersSuccess = createAction(
    '[Users Component] Load Users Success',
    props<{users: User[]}>()
);

export const loadUsersError = createAction(
    '[Users Component] Load Users Error',
    props<{payload: any}>()
);