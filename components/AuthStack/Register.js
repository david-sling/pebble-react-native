import React, {useState} from 'react'
import { Text, View, TouchableOpacity } from 'react-native';

//Dependencies
import axios from 'axios'

//services
import styles from '../../styles'
import config from '../../config'

//Custom components
import InputField from '../InputField'

//Hooks
import useAsyncStorage from '../../hooks/useAsyncStorage'

const { SERVER_URL } = config

export default function Register({navigation, token, setToken}){

    const [formData, setFormData] = useState({ name:'', username:'', password:'' }) 
    // const [token, setToken, clearToken] = useAsyncStorage('token')
    
    
    const handleSignUp = async _=>{
        try {
            console.log('submit')
            const submittedUser = await axios.post(`${SERVER_URL}/auth/register`,formData)
            console.log(submittedUser)
            handleLogIn()
        } catch (error) {
            console.log(error)
        }
    }

    const handleLogIn = async _=>{
        try {
            const loggedIn = await axios.post(`${SERVER_URL}/auth/login`,formData)
            // console.log(loggedIn)
            setToken(loggedIn.data.token)
        } catch (error) {
            console.log(error)
            Alert.alert(
                'Error',
                error,
                [
                  { text: 'OK', onPress: () => console.log('OK Pressed') }
                ],
                { cancelable: false }
              );
        }
        
    }



    return(
        <View style={styles.bottom} >
            <Text style={styles.formTitle}>Join Now!</Text>
            <InputField title='Name' value={formData.name} onChangeText={(text=>setFormData({...formData, name:text}))} />
            <InputField title='Username' value={formData.username} onChangeText={(text=>setFormData({...formData, username:text}))} />
            <InputField title='Password' value={formData.password} onChangeText={(text=>setFormData({...formData, password:text}))} secureTextEntry={true} />
            {/* <View></View> */}
            {/* <Button style={styles.formButton} color='#FFC700' title='Sign Up' /> */}
            <TouchableOpacity style={styles.formButton} onPress={handleSignUp} >
                <Text style={styles.formButtonText} >Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.formNav} onPress={()=>navigation.navigate('Login')} >
                <Text style={styles.text}>Already have an account? </Text><Text style={[styles.link, styles.text]} >Log In</Text>
            </TouchableOpacity>
            {/* {token&&<Redirect to='/user' />} */}
        </View>
    )
}