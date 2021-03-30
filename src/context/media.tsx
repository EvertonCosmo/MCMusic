import React, {createContext, useContext, useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import RNAndroidAudioStore from 'react-native-get-music-files';
import {AlbumProps, SongProps} from 'types';
import {getStorage, setStorage} from '@app/utils/storage';
import {Creators as PlayerCreators} from '../store/ducks/player';
import {useDispatch} from 'react-redux';
interface MediaContextData {
  songs: any;
  albums: any;
  songsByAlbum: any;
  getOfflineSongs(): void;
  getOfflineAlbums(): void;
  getOfflineSongsByAlbum(album: string): void;
}
const MediaContext = createContext<MediaContextData>({} as MediaContextData);

const MediaProvider: React.FC = ({children}) => {
  const dispatch = useDispatch();
  const [songs, setSongs] = useState<Array<SongProps>>([] as SongProps[]);
  const [songsByAlbum, setSongsByAlbum] = useState<Array<SongProps>>(
    [] as SongProps[],
  );
  const [albums, setAlbums] = useState<Array<AlbumProps>>([] as AlbumProps[]);

  async function requestStoragePermission() {
    console.log({permissions: 'request storage permission'});
    try {
      const granted = await PermissionsAndroid.request(
        'android.permission.READ_EXTERNAL_STORAGE' &&
          'android.permission.WRITE_EXTERNAL_STORAGE',
        {
          title: 'MCMusic App Permission',
          message:
            'MCMusic App needs access to your EXTERNAL_STORAGE' +
            'so you can take play offline songs',
          buttonNeutral: 'Ask me Later',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Access given');
      } else {
        console.log('No access given');
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    //Setup player
    dispatch(PlayerCreators.setupPlayer());

    const storage = async () => {
      let songsStorage = await getStorage<SongProps[]>('@songs');
      let albumsStorage = await getStorage<AlbumProps[]>('@albums');
      if (songsStorage?.length && albumsStorage?.length) {
        console.log('get from storage');
        Promise.all([
          getStorage<SongProps[]>('@songs', setSongs),
          getStorage<AlbumProps[]>('@albums', setAlbums),
        ]);
      }
    };
    storage();

    // getStorage<SongProps[]>('@songs', setSongs);
    // console.log({DATA: d});
    requestStoragePermission();
  }, []);

  // Javascript
  function getOfflineSongs() {
    console.log('get songs');
    RNAndroidAudioStore.getAll({})
      .then((media: SongProps[]) => {
        // console.log({media: media});
        console.log('Saving in storage...');
        setStorage(media, '@songs');
        setSongs(media);
      })
      .catch((err: any) => {
        console.error(err);
      });
  }
  function getOfflineAlbums() {
    console.log('get albums');
    RNAndroidAudioStore.getAlbums({})
      .then((data: AlbumProps[]) => {
        // console.log({albums: data});
        setStorage(data, '@albums');
        setAlbums(data);
      })
      .catch((err: any) => {
        console.error(err);
      });
  }

  function getOfflineSongsByAlbum(album: string) {
    console.log('get songs by album');

    RNAndroidAudioStore.getSongs({album})
      .then((data: SongProps[]) => {
        // console.log({songs: data});
        setSongsByAlbum(data);
        setStorage(data, '@songsByAlbum');
      })
      .catch((err: any) => {
        console.error(err);
      });
  }
  return (
    <MediaContext.Provider
      value={{
        albums,
        songs,
        getOfflineAlbums,
        getOfflineSongs,
        getOfflineSongsByAlbum,
        songsByAlbum,
      }}>
      {children}
    </MediaContext.Provider>
  );
};

function useMedia() {
  const context = useContext(MediaContext);
  if (!context) {
    throw new Error('useContext must be used within a Provider');
  }
  const {
    albums,
    songs,
    songsByAlbum,
    getOfflineAlbums,
    getOfflineSongs,
    getOfflineSongsByAlbum,
  } = context;
  return {
    albums,
    songs,
    songsByAlbum,
    getOfflineSongs,
    getOfflineAlbums,
    getOfflineSongsByAlbum,
  };
}
export {MediaProvider, useMedia};
