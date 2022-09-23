import React from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from './style'
import ProductList from '../productList'


const CheckCart = ({ items }) => {

    const handleRender = ({ item }) => {
        let itemNew = {
            sum: item.quantity,
            id: item.product_id
        }

        return <ProductList item={itemNew} check />
    }

    return (
        <View style={styles.container}>
            <View style={styles.yourCart}>
                <Text style={styles.title}>Đơn hàng của bạn</Text>
                <View style={styles.check}>
                    <FlatList
                        data={items}
                        renderItem={handleRender}
                        keyExtractor={item => item.id.toString()}
                        overScrollMode="never"
                    />
                </View>
            </View>
        </View>
    )
}

export default CheckCart
