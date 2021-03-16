export interface User {
  id: number;
  name: string;
  email: string;
}
export interface AuthType {
  email: string;
  password: string;
}
export interface GenericBaseAction<T = null> {
  type: string;
  payload: T;
}
export interface BaseAction {
  type: string;
  payload?: any;
}
