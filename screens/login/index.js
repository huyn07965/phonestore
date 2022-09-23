import React, { useState } from 'react'
import { View, Keyboard, Text, TextInput, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, Image } from 'react-native'
import { Color } from '../../contains'
import { MaterialIcons, Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import ShowToast from '../../help/showToast'
import { MESSAGE } from '../../contains'
import styles from './style'
import { fetchAsyncLogin } from '../../store/slices/auth'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import Hyperlink from 'react-native-hyperlink'

const LoginScreen = () => {
    const [showPass, setShowPass] = useState(true)
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const goBack = () => {
        navigation.goBack();
    }

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handleLogin = () => {
        dispatch(fetchAsyncLogin(data))
            .then(res => {
                if (!res.error) {
                    navigation.navigate('Home')
                    ShowToast(MESSAGE.loginSuccess)
                }
                else {
                    ShowToast(MESSAGE.loginFail)
                }
            })
    }

    const handleShowPass = () => {
        setShowPass(!showPass)
    }

    const noComplete = () => {
        ShowToast(MESSAGE.functionFail)
    }

    return (
        <View style={styles.container}>
            <View style={styles.boxImg}>
                <Image style={styles.img} source={require('../../assets/welcome.png')} />
            </View>
            <View style={styles.title}>
                <Text style={styles.title_text}>TO HSHOP</Text>
                <Text style={styles.description}>Nhập thông tin để đăng nhập</Text>
            </View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.content} >
                    <View style={styles.input} >
                        <MaterialIcons style={styles.icon_input} name="email" size={22} />
                        <TextInput
                            placeholder="Email..."
                            value={data.email}
                            onChangeText={(val) => setData({ ...data, email: val })}
                        />
                    </View>
                    <View style={styles.input} >
                        <TouchableOpacity onPress={handleShowPass}>
                            <Feather style={styles.icon_input} name={!showPass ? 'unlock' : "lock"} size={22} />
                        </TouchableOpacity>
                        <TextInput
                            placeholder="Mật khẩu..."
                            secureTextEntry={showPass}
                            value={data.password}
                            onChangeText={(val) => setData({ ...data, password: val })}
                        />
                    </View>
                    <TouchableOpacity style={styles.fogot} onPress={noComplete}>
                        <Text style={styles.fogot_text}>Quên mật khẩu?</Text>
                    </TouchableOpacity>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={['#0cb0a5', '#0ca89e', '#80e4c4']}
                        style={styles.button}>
                        <TouchableHighlight
                            activeOpacity={0.5}
                            underlayColor={Color.main}
                            onPress={handleLogin}
                            style={styles.button_login}
                        >
                            <Text style={styles.buttonText}>Đăng nhập</Text>
                        </TouchableHighlight>
                    </LinearGradient>
                    <View style={styles.signUp}>
                        <Hyperlink
                            linkDefault={true}
                            linkStyle={styles.signUp_text}
                            linkText={url => url === 'http://apiforlearning.zendvn.com/users/create' ? 'Đăng kí' : url}>
                            <Text style={styles.signUp_title}>Nếu bạn chưa có tài khoản hãy http://apiforlearning.zendvn.com/users/create </Text>
                        </Hyperlink>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <View>
                <TouchableOpacity onPress={goBack} style={styles.back}>
                    <MaterialCommunityIcons style={styles.icon_back} name="chevron-double-left" size={24} color="#0ca89e" />
                    <Text style={styles.back_text}>Quay lại</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen

