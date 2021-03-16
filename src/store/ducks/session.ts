import {AuthType, BaseAction, GenericBaseAction, User} from 'types';

export const Types = {
  SESSION_LOADING: 'session/SESSION_LOADING',
  SESSION_LOGOUT: 'session/SESSION_LOGOUT',
  SESSION_LOGOUT_SUCCESS: 'session/SESSION_LOGOUT_SUCCESS',
  SESSION_LOGOUT_ERROR: 'session/SESSION_LOGOUT_ERROR',
  SESSION_SIGNIN: 'session/SESSION_SIGNIN',
  SESSION_SIGNIN_SUCCESS: 'session/SESSION_SIGNIN_SUCCESS',
  SESSION_SIGNIN_ERROR: 'session/SESSION_ERROR',
  SESSION_SIGNUP: 'session/SESSION_SIGNUP',
  SESSION_SIGNUP_SUCCESS: 'session/SESSION_SIGNIUP_SUCCESS',
  SESSION_SIGNUP_ERROR: 'session/SESSION_SIGNUP_ERROR',
};

interface SessionState {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  error?: string | null;
}

const INITIAL_STATE: SessionState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: '',
};

const session = (state = INITIAL_STATE, {type, payload}: BaseAction) => {
  switch (type) {
    case Types.SESSION_LOADING:
      return {...state, loading: true};
    case Types.SESSION_SIGNIN_SUCCESS:
      return {
        ...state,
        user: payload?.user,
        loading: false,
        isAuthenticated: true,
        error: '',
      };
    case Types.SESSION_LOGOUT_ERROR ||
      Types.SESSION_SIGNIN_ERROR ||
      Types.SESSION_SIGNUP_ERROR:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: payload?.error,
      };
    case Types.SESSION_LOGOUT_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const Creators = {
  login: (data: AuthType): GenericBaseAction<AuthType> => ({
    type: Types.SESSION_SIGNIN,
    payload: data,
  }),
  signUp: (data: AuthType): GenericBaseAction<AuthType> => ({
    type: Types.SESSION_SIGNUP,
    payload: data,
  }),
  logout: (): BaseAction => ({
    type: Types.SESSION_LOGOUT,
  }),
};
export default session;
