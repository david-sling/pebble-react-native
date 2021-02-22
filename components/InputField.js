import React from 'react'
import { Text, TextInput, View } from 'react-native'

import styles from '../styles'

export default function InputField( { title, value, onChangeText, secureTextEntry } ) {
    return (
        <View style={styles.inputField} >
            <Text style={styles.inputTitle} >{title}</Text>
            <TextInput style={styles.formInput} value={value} onChangeText={onChangeText} secureTextEntry={secureTextEntry} />
            <View style={styles.inputUnderline} />
        </View>
    )
}
