import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRlgknKykuKzo6L0GpIfL4r6DDcDNKLFQ",
  authDomain: "ecommercejv.firebaseapp.com",
  projectId: "ecommercejv",
  storageBucket: "ecommercejv.appspot.com",
  messagingSenderId: "1074354979769",
  appId: "1:1074354979769:web:5b45f8313fb1aadcd16c68"
};

/* const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
}; */


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)