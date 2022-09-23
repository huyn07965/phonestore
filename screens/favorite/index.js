import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, RefreshControl } from 'react-native'
import styles from './style'
import { Product } from '../../components'
import { useSelector } from 'react-redux'
import { Empty, CheckLogin } from '../../common'

const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
};

const FavoriteScreen = () => {

    const isLogin = useSelector(state => state.Auth.isLogin)
    const product = useSelector(state => state.Product.items);
    const dataFavorite = useSelector(state => state.Favorite.items);
    const [items, setItems] = useState([])
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(1000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
        let itemsFavorite = product.filter(item => dataFavorite.indexOf(item.id) !== -1)
        setItems(itemsFavorite)
    }, [dataFavorite])

    const showItems = ({ item }) => {
        return (
            <Product data={item} />
        )
    }

    if (!isLogin) {
        return <CheckLogin />
    }

    if (items.length === 0) {
        return <Empty favorite />
    }

    return (
        <View style={styles.container}>
            <View style={styles.aside}>
                <Text style={styles.title}>Các sản phẩm đã yêu thích</Text>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={items}
                    renderItem={showItems}
                    keyExtractor={(item) => item.name.toString()}
                    numColumns={2}
                    nestedScrollEnabled={true}
                    overScrollMode="never"
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} />
            </View>
        </View>
    );
}

export default FavoriteScreen
