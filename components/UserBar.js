import React from 'react'
import { Button, Text, View, Redirect, TouchableOpacity } from 'react-native'
import {Link} from 'react-router-native'

import useAsyncStorage from '../hooks/useAsyncStorage'

import styles from '../styles'

export default function UserBar({history}) {

    const [token, setToken, clearToken] = useAsyncStorage('token')

    const handleSignOut = () => {
        setToken(null)
        // history.push('/')
        // console.log(history)
    }

    return (
        <View style={styles.userBar} >
            <Link onPress={handleSignOut} to='/' >
                <Text style={styles.formButtonText} >Log out</Text>
            </Link>
            {/* {token==null&& <Redirect to='/login' />} */}
        </View>
    )
}
