import { View, Text, Image,TextInput, TouchableOpacity, Pressable, Alert } from 'react-native'
import React, { useRef } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';




export default function SignIn() {
  const router=useRouter();

  const emailRef=useRef("");
  const passwordRef=useRef("")

  const handleLogin=async () =>{
    if(!emailRef.current || !passwordRef.current){
      Alert.alert('Oturum açma', 'Lütfen bütün alanları doldurunuz');
      return;
    }
    //login process
  }

  return (
    <View className="flex-1">
      <StatusBar style='dark'/>
      <View style={{paddingTop:hp(8), paddingHorizontal:wp(5)}} className="flex-1 gap-12">
        {/*signIn image*/}
        <View className="items-center">
          <Image style={{height:hp(25)}} resizeMode='contain' source={require('../assets/images/login.png')} />
        </View>
        <View className="gap-10">
          <Text style={{fontSize:hp(4)}} className="font-bold tracking-wider text-center text-neutral-800">Sign In</Text>
          {/* inputs */}
          <View className="gap-4">
          <View style={{height:hp(7)}} className="flex-row gap-4 px-4 bg-neutral-800 items-center rounded-xl">
            <Octicons name="mail" size={hp(2.7)} color="gray"/>
            <TextInput
            onChangeText={value=>emailRef.current=value}
            style={{height:hp(7)}} 
            className="flex-1 font-semibold text-neutral-700"
            placeholder='Email Address'
            placeholderTextColor={'gray'}/>
          </View>
          <View className="gap-6">          
          <View style={{height:hp(7)}} className="flex-row gap-4 px-4 bg-neutral-800 items-center rounded-xl">
            <Octicons name="lock" size={hp(2.7)} color="gray"/>
            <TextInput
            secureTextEntry
            onChangeText={value=>passwordRef.current=value}
            style={{height:hp(7)}} 
            className="flex-1 font-semibold text-neutral-700"
            placeholder='Password'
            placeholderTextColor={'gray'}/>
          </View>
          <Text style={{fontSize:hp(1.8)}} className="font-semibold text-right text-neutral-500">Forgot Password?</Text>
          </View>
          </View>
        {/* submit button */}
        <TouchableOpacity onPress={handleLogin} style={{
            backgroundColor: 'blue',
            alignItems: 'center',
            justifyContent: 'center',
            height: hp(7),
            borderRadius: 10,
            marginTop: hp(2)
          }}>
            <Text style={{
              fontSize: hp(2.7),
              color: 'white',
              fontWeight: 'bold'
            }}>
              Sign In
            </Text>
       </TouchableOpacity>

       {/* sign up text */}
       <View className="flex-row justify-center"> 
        <Text style={{fontSize:hp(1.8)}} className="font-semibold text-neutral-500">Don't have an account? </Text>
        <Pressable onPress={()=> router.push('signUp')}>
          <Text style={{fontSize:hp(1.8)}} className="font-bold text-indigo-500">Sign Up!</Text>
        </Pressable>
       </View>
          
        </View>
      </View>
    </View>
  )
}