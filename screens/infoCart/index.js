import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import styles from './style'
import { CheckCart } from '../../components'
import { LinearGradient } from 'expo-linear-gradient'
import { fetchAsyncListSingle } from '../../store/slices/buy'
import { useDispatch } from 'react-redux'
import { MESSAGE } from '../../contains'
import ShowToast from '../../help/showToast'

const InfoCartScreen = () => {
    const [code, setCode] = useState('')
    const [showCheckCart, setShowCheckCart] = useState(false)
    const dispatch = useDispatch()
    const [items, setItems] = useState([])

    const handleClick = () => {
        setShowCheckCart(false)
        dispatch(fetchAsyncListSingle(code))
            .then(res => {
                if (!res.error) {
                    setShowCheckCart(true)
                    setItems(res.payload?.order_items)
                } else {
                    ShowToast(MESSAGE.checkCartFail)
                    setCode('')
                }
            })
    }

    return (
        <View style={styles.container}>
            <View style={styles.top} >
                <Text style={styles.test}>Nhập mã đơn hàng</Text>
                <View style={styles.input}>
                    <TextInput
                        placeholder="Nhập mã đơn hàng của bạn"
                        value={code}
                        onChangeText={text => setCode(text)}
                        style={[styles.textInput]}
                    />
                </View>
                <View>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={['#0ca89e', '#0cb0a5', '#80e4c4']}
                        style={styles.buttonCheck}>
                        <TouchableOpacity style={styles.boxButton} onPress={handleClick}>
                            <Text style={styles.textColor}>Kiểm tra</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
            {
                showCheckCart && (
                    <View style={styles.checkCart}>
                        <CheckCart items={items} />
                    </View>
                )
            }
        </View>
    )
}

export default InfoCartScreen
