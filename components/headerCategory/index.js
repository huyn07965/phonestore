import React from 'react'
import { View, Text } from 'react-native'
import IconHeader from '../iconHeader'
import BoxSearch from '../boxSearch'
import styles from './style'
import { useRoute } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'

const HeaderCategory = () => {
  const route = useRoute()

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#0ca89e', '#0cb0a5', '#80e4c4']}
      style={styles.container}>
      <View style={styles.content}>
        <View style={styles.top}>
          <IconHeader name={'back'} />
          <Text numberOfLines={1} style={styles.name}>DANH MỤC {route.params.name}</Text>
          <IconHeader name={'sort'} />
        </View>
        <View style={styles.search}>
          <BoxSearch />
        </View>
      </View>
      <StatusBar style="auto" />
    </LinearGradient>
  )
}

export default HeaderCategory
