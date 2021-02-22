
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// import Logo from '../assets/logo.png'
import Typeloge from '../assets/images/type.png'

import styles from '../styles'

export default function Type() {
  return (
    <View style={styles.top} >
        <Image style={styles.type} source={Typeloge} />
        
    </View>
  );
}
