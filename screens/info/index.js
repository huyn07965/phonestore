import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, ScrollView, Image, RefreshControl } from 'react-native'
import styles from './style'
import { IconInfo } from '../../components'
import { MaterialIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { Logout } from '../../store/slices/auth'
import { fetchAsyncGetMe } from '../../store/slices/user'
import { MESSAGE } from '../../contains'
import ShowToast from '../../help/showToast'

const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
};

const InfoScreen = () => {

    const isLogin = useSelector(state => state.Auth.isLogin)
    const user = useSelector(state => state.User.info)
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(1000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
        dispatch(fetchAsyncGetMe())
    }, [])


    const handleLogout = () => {
        dispatch(Logout())
        ShowToast(MESSAGE.logoutSuccess)
    }
    const openLogin = () => {
        navigation.navigate('LoginScreen')
    }
    const openInfoShip = () => {
        navigation.navigate('InfoShipScreen')
    }
    const openInfoCart = () => {
        navigation.navigate('InfoCartScreen')
    }

    const noComplete = () => {
        ShowToast(MESSAGE.functionFail)
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never" style={styles.container} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
            <View style={styles.container_more}>
                <View style={styles.header}>
                    <View style={styles.info}>
                        <View style={styles.top}>
                            {
                                !isLogin ? (
                                    <View style={styles.text}>
                                        <Text style={styles.name}>Welcome To Hshop!</Text>
                                        <Text style={styles.description_more}>Hãy đăng nhập để mua sắm nào?</Text>
                                    </View>
                                )
                                    :
                                    (
                                        <View style={styles.text}>
                                            <Text style={styles.name}>{user.name}</Text>
                                            <View style={styles.user}>
                                                <IconInfo name={'crown'} />
                                                <LinearGradient
                                                    start={{ x: 0, y: 0 }}
                                                    end={{ x: 1, y: 0 }}
                                                    colors={['#80e4c4', '#0cb0a5', '#0ca89e']}
                                                    style={styles.user_more}>
                                                    <Text style={styles.description_user}>Khách hàng </Text>
                                                    <MaterialIcons name="navigate-next" size={24} color="#e6eaeb" />
                                                </LinearGradient>
                                            </View>
                                        </View>

                                    )
                            }
                            {
                                isLogin ? (
                                    <Image source={require('../../assets/user.png')} style={styles.image}></Image>
                                ) : (
                                    <Image source={require('../../assets/user_out.png')} style={styles.image}></Image>
                                )
                            }
                        </View>
                        <View style={styles.bottom}>
                            <TouchableOpacity style={styles.endow} onPress={noComplete}>
                                <View style={styles.icon}>
                                    <IconInfo name={'coin'} />
                                </View>
                                <Text style={styles.function}>Xu</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.endow} onPress={noComplete}>
                                <View style={styles.icon}>
                                    <IconInfo name={'rate'} />
                                </View>
                                <Text style={styles.function}>Đánh giá</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.endow} onPress={noComplete}>
                                <View style={styles.icon}>
                                    <IconInfo name={'chat'} />
                                </View>
                                <Text style={styles.function}>Nhắn tin</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.endow} onPress={noComplete}>
                                <View style={styles.icon}>
                                    <IconInfo name={'report'} />
                                </View>
                                <Text style={styles.function}>Báo cáo</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={styles.content}>
                        <View style={styles.body_top}>
                            <TouchableOpacity onPress={openInfoShip} style={styles.directional}>
                                <View style={styles.directional_more}>
                                    <View style={styles.icon_bottom}>
                                        <IconInfo name={'infoShip'} />
                                    </View>
                                    <Text style={styles.title}>Thông tin giao hàng</Text>
                                </View>
                                <IconInfo name={'next'} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={openInfoCart} style={styles.directional}>
                                <View style={styles.directional_more}>
                                    <View style={styles.icon_bottom}>
                                        <IconInfo name={'infoCart'} />
                                    </View>
                                    <Text style={styles.title}>Thông tin đơn hàng</Text>
                                </View>
                                <IconInfo name={'next'} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.body_bottom}>
                            <TouchableOpacity style={styles.directional} onPress={noComplete}>
                                <View style={styles.directional_more}>
                                    <View style={styles.icon_bottom}>
                                        <IconInfo name={'policyShopping'} />
                                    </View>
                                    <Text style={styles.title}>Chính sách mua hàng</Text>
                                </View>
                                <IconInfo name={'next'} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.directional} onPress={noComplete}>
                                <View style={styles.directional_more}>
                                    <View style={styles.icon_bottom}>
                                        <IconInfo name={'policyInsurance'} />
                                    </View>
                                    <Text style={styles.title}>Chính sách bảo hành</Text>
                                </View>
                                <IconInfo name={'next'} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.directional} onPress={noComplete}>
                                <View style={styles.directional_more}>
                                    <View style={styles.icon_bottom}>
                                        <IconInfo name={'myStore'} />
                                    </View>
                                    <Text style={styles.title}>Về chúng tôi</Text>
                                </View>
                                <IconInfo name={'next'} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.body_bottom}>
                            <TouchableOpacity onPress={noComplete} style={styles.directional}>
                                <View style={styles.directional_more}>
                                    <View style={styles.icon_bottom}>
                                        <IconInfo name={'darkMode'} />
                                    </View>
                                    <Text style={styles.title}>Chế độ tối</Text>
                                </View>
                                <IconInfo name={'next'} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.directional} onPress={noComplete}>
                                <View style={styles.directional_more}>
                                    <View style={styles.icon_bottom}>
                                        <IconInfo name={'help'} />
                                    </View>
                                    <Text style={styles.title}>Trung tâm trợ giúp</Text>
                                </View>
                                <IconInfo name={'next'} />
                            </TouchableOpacity>
                            {
                                !isLogin ? (
                                    <>
                                        <TouchableOpacity style={styles.directional} onPress={openLogin}>
                                            <View style={styles.directional_more}>
                                                <View style={styles.icon_bottom}>
                                                    <IconInfo name={'userLogout'} />
                                                </View>
                                                <Text style={styles.title}>Đăng nhập</Text>
                                            </View>
                                            <IconInfo name='login' />
                                        </TouchableOpacity>
                                    </>
                                )
                                    :
                                    (
                                        <>
                                            <TouchableOpacity style={styles.directional} onPress={handleLogout}>
                                                <View style={styles.directional_more}>
                                                    <View style={styles.icon_bottom}>
                                                        <IconInfo name={'userLogin'} />
                                                    </View>
                                                    <Text style={styles.title}>Đăng xuất</Text>
                                                </View>
                                                <IconInfo name={'logout'} />
                                            </TouchableOpacity>
                                        </>
                                    )
                            }
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default InfoScreen