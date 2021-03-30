import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import sagaPlugin from 'reactotron-redux-saga';
declare global {
  interface Console {
    tron: any;
  }
}

interface PluginConfig {
  except?: string[];
}

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure()
    .useReactNative({
      networking: {
        // optionally, you can turn it off with false.
        ignoreUrls: /symbolicate/,
      },
    })
    .use(sagaPlugin({except: ['']}))
    .use(reactotronRedux())
    .connect();

  tron.clear();

  console.tron = tron;

  // Non-persistent logs on Reactotron
  // Remove this if you want persistent logs
  tron.clear();
}
