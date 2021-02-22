import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export default key => {
  const [storageItem, setStorageItem] = useState(null);

  async function getStorageItem() {
    const data = await AsyncStorage.getItem(key);
    // console.log('token: ',data)
    setStorageItem(data);
  }

  function updateStorageItem(data) {
    if (typeof data === 'string') {
      AsyncStorage.setItem(key, data);
      setStorageItem(data);
    }
    else{
      AsyncStorage.setItem(key, '');
      setStorageItem('');
    }

    console.log('update', data)
    return data;
  }

  function clearStorageItem() {
    AsyncStorage.removeItem(key);
    setStorageItem(null);
  }

  useEffect(() => {
    getStorageItem();
  }, []);

  return [storageItem, updateStorageItem, clearStorageItem];
};