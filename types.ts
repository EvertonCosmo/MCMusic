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
export interface AlbumProps {
  album?: string;
  artist?: string;
  author?: string;
  cover?: string;
  id: string;
  name?: string;
  numberOfSongs?: number;
}
export interface SongProps {
  artist?: string;
  album?: string;
  cover: string;
  id: string;
  path: string;
  title: string;
  type?: string;
}
