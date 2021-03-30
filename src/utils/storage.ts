import AsyncStorage from '@react-native-async-storage/async-storage';
import {AlbumProps, SongProps} from 'types';

/**
 * @param  {Array<AlbumProps>|Array<SongProps>} data
 * @param  {string} key
 * @description set albums or songs in storage
 */
async function setStorage(
  data: Array<AlbumProps> | Array<SongProps>,
  key: string,
) {
  await AsyncStorage.setItem(key, JSON.stringify(data));
}
/**
 * @param  {string} key
 * @param  {React.SetStateAction<T|any>} callback?
 * @returns Promise
 * @description get a data of Type 'T' and key  from storage
 */
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

  const object: T = _stringToType<T>(data as string);

  return object;
}

function _stringToType<T>(data: string) {
  const c: T = JSON.parse(data);
  return c as T;
}
export {setStorage, getStorage};
