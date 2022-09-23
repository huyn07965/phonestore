import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import { Text, View, TouchableOpacity, ScrollView, FlatList, RefreshControl } from 'react-native'
import styles from './style'
import { ProductList, IconHeader } from '../../components'
import { useSelector } from 'react-redux'
import { Empty, CheckLogin } from '../../common'
import { StatusBar } from 'expo-status-bar'

const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
};

const CartScreen = () => {

    const navigation = useNavigation()
    const cartItems = useSelector(state => state.Cart.cart)
    const isLogin = useSelector((state) => state.Auth.isLogin)
    const [total, settotal] = useState(0)
    const [quantity, setQuanity] = useState(0)
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(1000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
        let totalCurrent = 0;
        let sumCurrent = 0;
        cartItems.map(item => {
            totalCurrent += item.total
            sumCurrent += item.quantity
        })
        settotal(totalCurrent)
        setQuanity(sumCurrent)
    }, [cartItems])

    if (!isLogin) {
        return <CheckLogin />
    }
    else {
        if (cartItems.length <= 0) {
            return <Empty />
        }
    }

    const handleBuy = () => {
        navigation.navigate('BuyScreen', {
            total, quantity
        })
    }

    const handleRender = ({ item }) => {
        return <ProductList item={item} cart />
    }

    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}
                overScrollMode="never"
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <View style={styles.body}>
                    <View style={styles.list}>
                        <FlatList
                            data={cartItems}
                            renderItem={handleRender}
                            keyExtractor={(item) => item.id.toString()}
                            showsVerticalScrollIndicator={false}
                            overScrollMode="never"
                        />
                    </View>
                </View>
            </ScrollView>

            <View style={styles.add}>
                <View style={styles.add_quanity}>
                    <View style={styles.add_quanity_more}>
                        <Text style={styles.title_quanity}> SL </Text>
                        <View style={styles.quantity}>
                            <Text style={styles.number_quanity}>{quantity}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.add_buy}>
                    <TouchableOpacity onPress={handleBuy} style={styles.add_buy_more}>
                        <Text style={styles.add_buy_text}>Mua hàng</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <StatusBar style="auto" />
        </>
    );
}

export default CartScreen