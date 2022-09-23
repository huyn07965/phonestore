import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, RefreshControl } from 'react-native'
import styles from './style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { CheckLogin, Skeleton } from '../../common'
import { InputStyle } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncGetMe, fetchAsyncUpdate } from '../../store/slices/user'
import { LinearGradient } from 'expo-linear-gradient'

const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
};

const InfoShipScreen = () => {

    const dispatch = useDispatch()
    const isLogin = useSelector((state) => state.Auth.isLogin)
    const [loading, setLoading] = useState(true)
    const [objInfo, setObjInfo] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    })
    const [isUpdate, setisUpdate] = useState(true)
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(1000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
        setLoading(true)
        dispatch(fetchAsyncGetMe())
            .then((res) => {
                if (!res.error) {
                    setLoading(false)
                    setObjInfo({
                        ...objInfo,
                        name: res.payload.name,
                        email: res.payload.email,
                        phone: res.payload.phone,
                        address: res.payload.address
                    })
                } else {
                    setLoading(false)
                }
            });
    }, [isUpdate]);

    if (loading) {
        return <Skeleton layout={'layoutForm'} />
    }

    const handleUpdate = () => {
        dispatch(fetchAsyncUpdate(objInfo))
            .then((res) => {
                if (!res.error) {
                    setisUpdate(!isUpdate)
                }
            });
    }
    return (
        <>
            {isLogin ? (
                <KeyboardAwareScrollView
                    enableOnAndroid={true}
                    style={styles.container}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                >
                    <View style={styles.formInput}>
                        <InputStyle
                            name={"Họ tên"}
                            value={objInfo.name}
                            onChange={(value) => setObjInfo({ ...objInfo, name: value })}
                        />
                    </View>
                    <View style={styles.formInput}>
                        <InputStyle
                            name={"Email"}
                            value={objInfo.email}
                            onChange={(value) => setObjInfo({ ...objInfo, email: value })}
                        />
                    </View>
                    <View style={styles.formInput}>
                        <InputStyle
                            name={"Số điện thoại"}
                            value={objInfo.phone}
                            onChange={(value) => setObjInfo({ ...objInfo, phone: value })}
                        />
                    </View>
                    <View style={styles.formInput}>
                        <InputStyle
                            name={"Địa chỉ"}
                            value={objInfo.address}
                            onChange={(value) => setObjInfo({ ...objInfo, address: value })}
                        />
                    </View>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={['#0ca89e', '#0cb0a5', '#80e4c4']}
                        style={styles.handle_update}>
                        <TouchableOpacity onPress={handleUpdate} style={styles.update} >
                            <Text style={styles.text_update}>Cập nhật thông tin</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </KeyboardAwareScrollView>
            )
                :
                (
                    <CheckLogin />
                )
            }
        </>
    )
}

export default InfoShipScreen
