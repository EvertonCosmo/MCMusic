import {AlbumProps, BaseAction, SongProps} from 'types';
export const Types = {
  GET_OFFLINE_SONGS: 'media/GET_OFFLINE_SONGS',
  GET_OFFLINE_SONGS_SUCCESS: 'media/GET_OFFLINE_SONGS_SUCCESS',
  GET_OFFLINE_ALBUMS: 'media/GET_OFFLINE_ALBUMS',
  GET_OFFLINE_ALBUMS_SUCCESS: 'media/GET_OFFLINE_ALBUMS_SUCCESS',
  GET_OFFLINE_SONGS_BY_ALBUM: 'media/GET_OFFLINE_SONGS_BY_ABLUMS',
  GET_OFFLINE_SONGS_BY_ALBUM_SUCCESS: 'media/GET_OFFLINE_ALBUMS_SUCCESS',
};

interface MediaState {
  songs: Array<SongProps>;
  albums: Array<AlbumProps>;
  songsByAlbum: Array<SongProps>;
}
const INITIAL_STATE: MediaState = {
  songs: [],
  albums: [],
  songsByAlbum: [],
};

const media = (state = INITIAL_STATE, {payload, type}: BaseAction) => {
  switch (type) {
    case Types.GET_OFFLINE_SONGS_SUCCESS:
      return {...state, songs: payload?.songs};
    case Types.GET_OFFLINE_ALBUMS_SUCCESS:
      return {...state, albums: payload?.albums};
    case Types.GET_OFFLINE_SONGS_BY_ALBUM_SUCCESS:
      return {...state, songsByAlbum: payload?.songs};
    default:
      return state;
  }
};
export const Creators = {
  getOfflineSongs: (): BaseAction => ({
    type: Types.GET_OFFLINE_SONGS,
  }),
  getOfflineAlbums: (): BaseAction => ({
    type: Types.GET_OFFLINE_ALBUMS,
  }),
  getOfflineSongsByAlbum: (): BaseAction => ({
    type: Types.GET_OFFLINE_SONGS_BY_ALBUM,
  }),
};
export default media;
