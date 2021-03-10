import React, {createContext, useState, useContext, useEffect} from 'react';
import {ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {User} from '@types';

interface AuthContextData {
  user: User | null;
  signIn(email: string, password: string): Promise<void>;
  signOut(): Promise<void>;
  isLoading: boolean;
  isAuthenticated: boolean;
}

interface PromiseResponse {
  data: {
    user: User;
  };
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
  const [userLogged, setUser] = useState<User | null>(null);
  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@user');

      if (storagedUser) {
        setUser(JSON.parse(storagedUser));
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);
  async function signIn(email = 'everton8cosmo@gmail.com') {
    const response: PromiseResponse = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            user: {
              id: 1,
              name: 'Cosmo',
              email: email,
            },
          },
        });
      }, 1500);
    });
    const {user} = response.data;
    await AsyncStorage.setItem('@user', JSON.stringify(user));
    setLoading(!isloading);
    setUser(user);
    ToastAndroid.show(
      `Logged with ${JSON.stringify(user)}`,
      ToastAndroid.SHORT,
    );
    // await AsyncStorage.setItem('@token', token); // save token
  }
  async function signOut() {}

  return (
    <AuthContext.Provider
      value={{
        user: userLogged,
        isAuthenticated: !!userLogged,
        isLoading: isloading,
        signIn,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a Provider');
  }
  const {isAuthenticated, isLoading, signIn, signOut, user} = context;
  return {isAuthenticated, isLoading, signIn, signOut, user};
}

export {AuthProvider, useAuth};
