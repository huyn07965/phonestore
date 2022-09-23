import React, { useEffect, useState } from 'react'
import { View, ScrollView, RefreshControl } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BoxSlider, Category, CategorySpecial } from '../../components'
import styles from './style'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../../store/slices/categories'
import { fetchProduct } from '../../store/slices/product'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
};

const HomeScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const datacategories = useSelector(state => state.Categories.items)
    const token = useSelector(state => state.Auth.token)
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(1000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
        const setHeader = async () => {
            try {
                let token = await AsyncStorage.getItem('access_token')
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            } catch (e) {
                console.log(e)
            }
        }
        setHeader()
    }, [token])

    useEffect(() => {
        dispatch(fetchCategories())
        dispatch(fetchProduct())
    }, [])

    return (
        <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never" refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
            <View style={styles.container}>
                <View style={styles.aside}>
                    <View>
                        <Category items={datacategories} />
                        <View style={styles.slider}>
                            <BoxSlider />
                        </View>
                        <View style={styles.category_more}>
                            <CategorySpecial nameCategory={'Sản Phẩm Nổi Bật'} />
                            <CategorySpecial nameCategory={'Sản Phẩm Mới'} />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default HomeScreen
