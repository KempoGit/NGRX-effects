import { createReducer, on } from '@ngrx/store';
import { loadUser, loadUserSuccess, loadUserError } from '../actions';
import { User } from 'src/app/models/user.model';

export interface UserState {
    id: string,
    user: User | null,
    loaded: boolean,
    loading: boolean,
    error: any
};

const userInitialState: UserState = {
    id: '',
    user: null,
    loaded: false,
    loading: false,
    error: null
};

export const userReducer = createReducer(
    userInitialState,
    on(
        loadUser,
        ( state, { id } ) => ({
            ...state,
            loading: true,
            id: id
        }),
    ),
    on(
        loadUserSuccess,
        ( state, { user } ) => ({
            ...state,
            loading: false,
            loaded: true,
            user: {...user}
        }),
    ),
    on(
        loadUserError,
        ( state, { payload } ) => ({
            ...state,
            loading: false,
            loaded: true,
            error: {
                url: payload.url,
                name: payload.name,
                message: payload.message
            }
        }),
    ),
);