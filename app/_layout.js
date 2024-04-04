import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import {Slot, useRouter,useSegments} from "expo-router";
import "../global.css";
import { AuthContextProvider } from '../context/authContext';
import { useAuth } from '../context/authContext';


const MainLayout=()=>{
  const {isAuthenticated}= useAuth();
  const segments=useSegments();
  const router=useRouter();


  useEffect(()=>{
    //kullanıcının oturum açıp açmadığını kontrol etme

    if(typeof isAuthenticated=='undefined') return;
    const inApp=segments[0]=='(app)';

    if(isAuthenticated && !inApp){
      //anasayfaya yönlendir
      router.replace('home');
    }
    else if(isAuthenticated==false){
      //giriş yapmaya yönlendir
      router.replace('signIn');
    }

  },[isAuthenticated])

  return <Slot/>
}

export default function RootLayout() {
  return (
    <AuthContextProvider>
      <MainLayout/>
    </AuthContextProvider>
  )
}