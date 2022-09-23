import React from 'react'
import styles from './style'
import { Image, View, Text } from 'react-native'

const CheckLogin = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxImg}>
                <Image style={styles.img} source={require('../../assets/emptydownload.png')} />
            </View>
            <Text style={styles.text}>Bạn chưa đăng nhập</Text>
        </View>
    )
}

export default CheckLogin