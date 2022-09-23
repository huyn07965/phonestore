import React, { useState, useEffect } from 'react'
import { View, Image, Text, ScrollView, TouchableOpacity, FlatList, RefreshControl } from 'react-native'
import { FormatPrice, SalePercent } from '../../help'
import { RatingComponent, ProductHorizital, Comment, HeaderMore, EditQuantity } from '../../components'
import styles from './style'
import { useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleProduct } from '../../store/slices/product'
import { fetchProductInCategory } from '../../store/slices/categories'
import { AddCart } from '../../store/slices/cart'
import ShowToast from '../../help/showToast'
import { MESSAGE, Images } from '../../contains'
import { StatusBar } from 'expo-status-bar'
import { Skeleton } from '../../common'

const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
};

const ProductScreen = ({ sale = true }) => {
    const isLogin = useSelector(state => state.Auth.isLogin)
    const [number, setNumber] = useState(1)
    const dispatch = useDispatch()
    const route = useRoute()
    const { id } = route.params
    const product = useSelector(state => state.Product.product)
    const productInCategory = useSelector(state => state.Categories.products)
    const [loading, setLoading] = useState(true)
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(1000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
        dispatch(fetchSingleProduct({ id }))
            .then(res => {
                if (!res.error) {
                    dispatch(fetchProductInCategory({ id: res.payload.category_id }))
                    setLoading(false)
                }
                else {
                    alert('Sản phẩm lỗi')
                }
            })
        dispatch(fetchProductInCategory({ id }))
    }, [route])

    const handleChangeNumber = (val) => {
        setNumber(val)
    }

    const showItems = ({ item }) => {
        return (
            <ProductHorizital data={item} />
        )
    }

    const handleAddCart = () => {
        if (!isLogin) (
            ShowToast(MESSAGE.notLogin)
        )
        else {
            dispatch(AddCart({ id, sum: number }))
            setNumber(1)
            ShowToast(MESSAGE.addCartSuccess)
        }
    }
    return (
        <>
            {!loading ? (
                <>
                    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} overScrollMode="never" refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} >
                        <View style={styles.product}>
                            <View style={styles.productImg}>
                                <Image style={styles.img} source={{ uri: product.image }} />
                            </View>
                        </View>
                        <View style={styles.view}>
                            <View style={styles.view_main}>
                                <View style={styles.productContent}>
                                    <View style={styles.price}>
                                        <View style={styles.priceDetail}>
                                            <Text style={styles.priceText}>{FormatPrice(product.price_sale_off)}</Text>
                                            <Text style={styles.oldPrice}>{FormatPrice(product.price)}</Text>
                                        </View>
                                        {
                                            sale && (
                                                <View style={styles.sale} >
                                                    <Image style={styles.saleImg} source={Images.sale2} />
                                                    <View style={styles.boxSale}>
                                                        <Text style={styles.saleOf}>Đến </Text>
                                                        <Text style={styles.salePr}>{SalePercent(product.price, product.price_sale_off)}</Text>
                                                    </View>
                                                </View>
                                            )
                                        }
                                    </View>
                                </View>
                                <View style={styles.name}>
                                    <Text numberOfLines={2} style={styles.textName}>{product.name}</Text>
                                    <View><RatingComponent /></View>
                                </View>
                                <View style={styles.configuration}>
                                    <Text style={styles.configuration_text}>Cấu hình: </Text>
                                    <Text>{product.summary}</Text>
                                </View>
                                <Text style={styles.title}> Mô tả sản phẩm </Text>
                                <Text style={styles.title_source}> {product.description} </Text>
                            </View>
                            <View style={styles.view_main}>
                                <Text style={styles.title}> Sản phẩm liên quan </Text>
                                <View style={styles.boxProduct}>
                                    <FlatList
                                        data={productInCategory}
                                        renderItem={showItems}
                                        keyExtractor={(item) => item.name.toString()}
                                        horizontal={true}
                                        showHorizontalScrollIndicator={false}
                                        overScrollMode="never"
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.view_main}>
                            <Comment />
                        </View>
                    </ScrollView>
                    <View style={styles.add}>
                        <View style={styles.add_quanity}>
                            <View style={styles.add_quanity_more}>
                                <Text style={styles.title_quanity}> SL </Text>
                                <View style={styles.quantity}>
                                    <EditQuantity quanityAddCart={(val) => handleChangeNumber(val)} quantity={number} product />
                                </View>
                            </View>
                        </View>
                        <View style={styles.add_buy}>
                            <TouchableOpacity onPress={handleAddCart} style={styles.add_buy_more}>
                                <Text style={styles.add_buy_text}>Thêm vào giỏ hàng</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </>


            ) : (
                <Skeleton layout="layoutProductDetail" />
            )}
            <StatusBar style="auto" />
        </>
    )

}

export default ProductScreen
