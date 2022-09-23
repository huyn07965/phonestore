import React from 'react'
import { View, Text } from 'react-native'
import IconHeader from '../iconHeader'
import styles from './style'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'

const HeaderMore = ({ name }) => {

    let nameHeader = ''

    switch (name) {
        case 'InfoShip':
            nameHeader = 'Thông tin giao hàng'
            break;
        case 'InfoCart':
            nameHeader = 'Thông tin đơn hàng'
            break;
        case 'DetailProduct':
            nameHeader = 'Chi tiết sản phẩm'
            break;
        case 'Buy':
            nameHeader = 'Thanh toán đơn hàng'
            break;
        case 'Cart':
            nameHeader = 'Giỏ hàng'
            break;
        case 'Filter':
            nameHeader = 'Lọc sản phẩm'
            break;
        default: break;
    }

    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#0ca89e', '#0cb0a5', '#80e4c4']}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <IconHeader name={'back'} />
                    <Text style={styles.titleHeader}>{nameHeader}</Text>
                </View>
                <IconHeader name={'cart'} />
            </View>
            <StatusBar style="auto" />
        </LinearGradient>
    )
}

export default HeaderMore
