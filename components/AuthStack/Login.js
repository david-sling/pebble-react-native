import React, {useState, useEffect} from 'react'
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import {Link, Redirect} from 'react-router-native'

import styles from '../../styles'
import config from '../../config'

import InputField from '../InputField'

import useAsyncStorage from '../../hooks/useAsyncStorage'

const { SERVER_URL } = config

export default function Login({navigation, token, setToken}){

    const [formData, setFormData] = useState({ username:'', password:'' }) 
    // const [token, setToken, clearToken] = useAsyncStorage('token')
    const [alert, setAlert] = useState('');

    useEffect(()=>{
        console.log('Logged in',token)
    },[token])
    
    const handleLogIn = async _=>{
        try {
            const loggedIn = await axios.post(`${SERVER_URL}/auth/login`,formData)
            // console.log(loggedIn)
            setToken(loggedIn.data.token)
        } catch (error) {
            console.log(error)
            Alert.alert(
                'Error',
                'Something went wrong',
                [
                  { text: 'OK', onPress: () => console.log('OK Pressed') }
                ],
                { cancelable: false }
              );
        }
        
    }

    return(
        <View style={styles.bottom} >
            <Text style={styles.formTitle}>Sign In</Text>
            <InputField title='Username' value={formData.username} onChangeText={(text=>setFormData({...formData, username:text}))} />
            <InputField title='Password' value={formData.password} onChangeText={(text=>setFormData({...formData, password:text}))} secureTextEntry={true} />
            {/* <View></View> */}
            {/* <Button style={styles.formButton} color='#FFC700' title='Sign Up' /> */}
            <TouchableOpacity style={styles.formButton} onPress={handleLogIn} >
                <Text style={styles.formButtonText} >Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.formNav} onPress={()=>{navigation.navigate('Register')}} >
                <Text style={styles.text}>New to pebble? </Text><Text style={[styles.link, styles.text]} >Sign Up</Text>
            </TouchableOpacity>
            {/* {token&&<Redirect to='/user' />} */}
        </View>

    )
}