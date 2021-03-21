import {stringToType} from '@app/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useContext, useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import RNAndroidAudioStore from 'react-native-get-music-files';
import {AlbumProps, SongProps} from 'types';
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

  async function getStorage<T>(
    key: string,
    callback?: React.SetStateAction<T | any>,
  ): Promise<T> {
    const response = await _getStorageAndSave<T>(key).then((result) => {
      if (callback) {
        callback(result);
      }
      return result;
    });

    return response;
  }
  async function _getStorageAndSave<T>(key: string): Promise<T> {
    const data = await AsyncStorage.getItem(key);

    const object: T = stringToType<T>(data as string);

    return object;
  }

  async function setStorage(
    data: Array<AlbumProps> | Array<SongProps>,
    key: string,
  ) {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  }

  useEffect(() => {
    const storage = async () => {
      let songsStorage = await getStorage<SongProps[]>('@songs');
      let albumsStorage = await getStorage<AlbumProps[]>('@albums');
      if (songsStorage.length && albumsStorage.length) {
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

  useEffect(() => {
    console.log('songs has changed');
    console.log({songs: songs[0]});
  }, [songs]);

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
    return true;
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
