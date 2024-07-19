import { View, Text, Pressable,ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/authContext'
import { Button } from 'react-native-web';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ChatList from '../../components/ChatList';
import { StatusBar } from 'expo-status-bar';
import {query, where} from 'firebase/firestore';
import {usersRef} from '../../firebaseConfig';


export default function Home() {
  const {logout, user} = useAuth();
  const [users, setUsers]=useState([1,2,3]);
  useEffect(()=>{
    if(user?.uid)
      getUsers()
  }, [])
  const getUsers= async ()=>{
    //kullanıcıları al
    const q = query(usersRef, where('userId', '!=', user?.uid));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach(doc => {
      data.push({...doc.data()});
    });

    console.log('got users: ', data);
  }
  return (
    <View className="flex-1 bg-white">
     <StatusBar style="light"/>

     {
      users.length > 0?(
        <ChatList users={users}/>
      ):(
        <View className="flex itemns-center" style={{top: hp(30)}}>
          <ActivityIndicator size="large" />
        </View>
      )
     }

    </View>
  )
}