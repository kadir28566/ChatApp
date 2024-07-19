import { View, Text, Pressable, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/authContext';
import { Button } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ChatList from '../../components/ChatList';
import { StatusBar } from 'expo-status-bar';
import { query, where, getDocs } from 'firebase/firestore';
import { useRef } from '../../firebaseConfig'; // Doğru import


export default function Home() {
  const { logout, user } = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (user?.uid) {
      getUsers();
    }
  }, []);

  const getUsers = async () => {
    try {
      const q = query(useRef, where('userId', '!=', user?.uid));
      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach(doc => {
        data.push({ ...doc.data() });
      });
      setUsers(data);
      console.log('got users: ', data);
    } catch (error) {
      console.error("Error getting users: ", error);
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar style="light" />
      {users.length > 0 ? (
        <ChatList currentUser= {user} users={users} />
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
}
