import * as firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBnEmzEhAd9Grlh-1aUB10E3GCpY_5GIy0",
  authDomain: "valorizacionapp-5575e.firebaseapp.com",
  projectId: "valorizacionapp-5575e",
  storageBucket: "valorizacionapp-5575e.appspot.com",
  messagingSenderId: "378845276511",
  appId: "1:378845276511:web:6e73044e65f1093998aeea",
  measurementId: "G-K6VJP1HNJD",
}  
    
  /*apiKey: "AIzaSyBBslmHpGLJ4Zv9lBHfBZbqxr_v9rU_3ZI",
  /*authDomain: "valorizacionapp.firebaseapp.com",
  /*projectId: "valorizacionapp",
  /*storageBucket: "valorizacionapp.appspot.com",
  /*messagingSenderId: "419454009226",
  /*appId: "1:419454009226:web:85166a0b6564ddcbad1273",
  /*measurementId: "G-6NFLRN5C0T"

}

firebase.initializeApp(config);
/* firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL); */
/* firebase.analytics(); */

export default firebase;