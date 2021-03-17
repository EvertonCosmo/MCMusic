import React, {useEffect, createContext, useState, useContext} from 'react';
import {PermissionsAndroid} from 'react-native';
interface MediaContextData {
  songs: any;
  albums: any;
  getOfflineSongs(): void;
  getOfflineAlbums(): void;
}
const MediaContext = createContext<MediaContextData>({} as MediaContextData);

const MediaProvider: React.FC = ({children}) => {
  const [songs, setSongs] = useState([]);
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

  function getOfflineSongs() {
    return true;
  }
  function getOfflineAlbums() {
    return true;
  }

  return (
    <MediaContext.Provider
      value={{albums, songs, getOfflineAlbums, getOfflineSongs}}>
      {children}
    </MediaContext.Provider>
  );
};

function useMedia() {
  const context = useContext(MediaContext);
  if (!context) {
    throw new Error('useContext must be used within a Provider');
  }
  const {albums, songs, getOfflineAlbums, getOfflineSongs} = context;
  return {albums, songs, getOfflineSongs, getOfflineAlbums};
}
export {MediaProvider, useMedia};
