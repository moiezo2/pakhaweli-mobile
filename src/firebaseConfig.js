import firebase from '@react-native-firebase/app';


let fireBaseApp;
const intializeFirebaseApp = async () => {
  if (firebase.apps.length === 0) {
    fireBaseApp = firebase.initializeApp({
      clientId: 'AIzaSyDe9eUR4USfmQPDIYzyS4xI1OMNQUNXwrI',
      appId: '1:1079988778746:web:264439743c45bbd1fa7b43',
      apiKey: 'AIzaSyDe9eUR4USfmQPDIYzyS4xI1OMNQUNXwrI',
      databaseURL: 'pak-haweli-resturant.firebaseapp.com',
      storageBucket: 'pak-haweli-resturant.appspot.com',
      messagingSenderId: '1079988778746',
      projectId: 'pak-haweli-resturant',
    })
  } else {
    fireBaseApp = firebase.app()
  }
}

export default intializeFirebaseApp;