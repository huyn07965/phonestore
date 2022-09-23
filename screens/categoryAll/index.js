import React, { useEffect, useState } from 'react'
import { View, FlatList, Text, RefreshControl } from 'react-native'
import { BoxSlider, Product } from '../../components'
import styles from './style'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../store/slices/product'

const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
};

const CategoryAll = () => {

    const dispatch = useDispatch();
    const items = useSelector(state => state.Product.items)
    const itemsFilter = useSelector(state => state.Filter.items)
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(1000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
        let min_price = itemsFilter.fromValue
        let max_price = itemsFilter.toValue
        let sortBy, order;
        switch (itemsFilter?.active) {
            case 'Giảm dần':
                sortBy = 'price'
                order = 'desc'
                break;
            case 'Tăng dần':
                sortBy = 'price'
                order = 'asc'
                break;
            case 'Mới nhất':
                sortBy = 'id'
                order = 'asc'
                break;
            case 'Cũ nhất':
                sortBy = 'id'
                order = 'desc'
                break;
            case 'Đang giảm giá':
                sortBy = 'price_sale_off'
                order = 'desc'
                break;
        }
        dispatch(fetchProduct({ sortBy, order, min_price, max_price, name: 'items' }))
    }, [itemsFilter])

    const showItems = ({ item }) => {
        return (
            <Product data={item} />
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.aside}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    overScrollMode="never"
                    data={items}
                    renderItem={showItems}
                    keyExtractor={(item) => item.name.toString()}
                    numColumns={2}
                    nestedScrollEnabled={true}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                    ListHeaderComponent={
                        <View>
                            <BoxSlider />
                            <View style={styles.title}>
                                <Text style={styles.title_text}>Tất cả sản phẩm</Text>
                            </View>
                        </View>
                    }
                />
            </View>
        </View>
    )

}

export default CategoryAll