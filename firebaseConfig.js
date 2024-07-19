import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported as isAnalyticsSupported } from "firebase/analytics";
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from 'firebase/firestore';

// Firebase yapılandırmanız
const firebaseConfig = {
  apiKey: "AIzaSyBkAjXeXBwlOnWZfeyyF78JbZ1QhPcRE5U",
  authDomain: "my-app-75236.firebaseapp.com",
  projectId: "my-app-75236",
  storageBucket: "my-app-75236.appspot.com",
  messagingSenderId: "776592002382",
  appId: "1:776592002382:web:b3bb8a5c02abe42117221f",
  measurementId: "G-4Z96RR6CYP"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Analytics'in desteklenip desteklenmediğini kontrol edin
isAnalyticsSupported().then(isSupported => {
  if (isSupported) {
    getAnalytics(app);
  }
});

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

export const useRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms');
