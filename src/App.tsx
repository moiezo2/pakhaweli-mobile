/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import Loading from './Loading';
import { NavigationContainer } from '@react-navigation/native';
import intializeFirebaseApp from './firebaseConfig';

// import {
//   Colors,
// } from 'react-native/Libraries/NewAppScreen';

// import { getFirestore, collection, getDocs } from "firebase/firestore";

// import { initializeApp, FirebaseApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional








function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  useEffect(() => {
    intializeFirebaseApp()
  }, [])
  return (
    <NavigationContainer>
      <Loading />
    </NavigationContainer>
  );
}

export default App;
