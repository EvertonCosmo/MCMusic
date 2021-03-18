import React, {useEffect, createContext, useState, useContext} from 'react';
import RNAndroidAudioStore from 'react-native-get-music-files';

import {PermissionsAndroid} from 'react-native';
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
  const [songs, setSongs] = useState([]);
  const [songsByAlbum, setSongsByAlbum] = useState([]);
  const [albums, setAlbums] = useState([]);

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
    requestStoragePermission();
  }, []);

  // Javascript
  function getOfflineSongs() {
    console.log('get songs');
    RNAndroidAudioStore.getAll({})
      .then((media: any) => {
        console.log({media: media});
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
      .then((data: any) => {
        console.log({albums: data});
        setAlbums(data);
      })
      .catch((err: any) => {
        console.error(err);
      });
  }

  function getOfflineSongsByAlbum(album: string) {
    console.log('get songs by album');

    RNAndroidAudioStore.getSongs({album})
      .then((data: any) => {
        console.log({songs: data});
        setSongsByAlbum(data);
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
