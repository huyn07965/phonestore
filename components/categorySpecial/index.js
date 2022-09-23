import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { FormatPrice, SalePercent } from '../../help'
import styles from './style'
import { Skeleton } from '../../common'
import { fetchProduct } from '../../store/slices/product'
import { useDispatch } from 'react-redux'
import { Images } from '../../contains'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CategorySpecial = ({ nameCategory, sale = true }) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])

    useEffect(() => {
        let result
        switch (nameCategory) {
            case 'Sản Phẩm Nổi Bật':
                result = dispatch(fetchProduct({ special: true, name: 'itemsSpec' }))
                break;
            case 'Sản Phẩm Mới':
                result = dispatch(fetchProduct({ is_new: true, name: 'itemsNew' }))
                break;

            default:
                break;
        }
        result.then(res => {
            if (!res.error) {
                setItems(res.payload.data)
                setLoading(false)
            }
        })
    }, [])

    if (loading) {
        return < Skeleton layout={'layoutProductHome'} />
    }

    const goProduct = (id) => {
        navigation.navigate('ProductScreen', {
            id: id
        })
    }

    const showItems = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => goProduct(item.id)} style={styles.box}>
                <View style={styles.product}>
                    <View style={styles.boxImg}>
                        <Image style={styles.imgItem} source={{ uri: item.image }} />
                    </View>
                    <View style={styles.titleProduct}>
                        <Text numberOfLines={1} style={styles.name} >{item.name}</Text>
                        <Text numberOfLines={1} style={styles.titleSumary}>{item.summary}</Text>
                        {
                            sale && (
                                <View style={styles.sale} >
                                    <Image style={styles.saleImg} source={Images.sale} />
                                    <View style={styles.boxSale}>
                                        <Text style={styles.saleOf}>Đến</Text>
                                        <Text style={styles.saleOf}>{SalePercent(item.price, item.price_sale_off)}</Text>
                                    </View>
                                </View>
                            )
                        }
                        <Text style={styles.price}>{FormatPrice(item.price_sale_off)}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>{nameCategory}</Text>
                <MaterialCommunityIcons name="chevron-double-left" size={24} color="#0ca89e" />
            </View>
            <FlatList
                data={items}
                renderItem={showItems}
                keyExtractor={(item) => item.name.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                overScrollMode="never"
            />
        </View>
    )
}

export default CategorySpecial
