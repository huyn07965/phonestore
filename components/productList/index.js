import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './style'
import { FormatPrice } from '../../help'
import EditQuantity from '../quantity'
import { AddCart, RemoveCart } from '../../store/slices/cart'
import { fetchSingleProduct } from '../../store/slices/product'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const ProductList = ({ item, check, cart }) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [number, setNumber] = useState(item?.sum || 1)
    const [data, setData] = useState({})
    const [loading, setloading] = useState(true)

    useEffect(() => {
        setloading(true)
        dispatch(fetchSingleProduct({ id: item?.id, name: 'product' }))
            .then(res => {
                if (!res.error) {
                    setData(res.payload)
                    setloading(false)
                    if (!check) {
                        dispatch(AddCart({ id: item?.id, total: number * res.payload.price_sale_off, update: true, sumUpdate: item?.sum }))
                    }
                }
            })

    }, [])

    const handleChangeNumber = (val) => {
        val === 0 ? dispatch(RemoveCart({ id: item?.id })) : dispatch(AddCart({ id: item?.id, update: true, sumUpdate: val, total: val * data.price_sale_off }))
        setNumber(val)
    }
    const showProduct = () => {
        navigation.navigate('ProductScreen',
            {
                id: data.id,
            })
    }

    return (
        <>
            {cart ? (
                <View style={styles.container}>
                    <TouchableOpacity onPress={showProduct}>
                        <View style={styles.bgimg}>
                            <Image style={styles.img} source={{ uri: data.image }} />
                        </View>
                    </TouchableOpacity>
                    < View style={styles.content}>
                        <Text numberOfLines={1} style={styles.content_name}>{data.name}</Text>
                        <Text numberOfLines={1} style={styles.content_description}>{data.summary}</Text>
                        <View style={styles.content_more}>
                            <View style={styles.content_price}>
                                <Text numberOfLines={2} style={styles.price_text}>{FormatPrice(number * data.price_sale_off)}</Text>
                            </View>
                            < View style={styles.edit}>
                                <EditQuantity quantity={number} quanityAddCart={(val) => handleChangeNumber(val)} />
                            </View>
                        </View>
                    </View>
                </View>
            ) : (
                <View style={styles.container_buy}>
                    <TouchableOpacity >
                        <View style={styles.bgimg}>
                            <Image style={styles.img} source={{ uri: data.image }} />
                        </View>
                    </TouchableOpacity>
                    < View style={styles.content_buy}>
                        <Text numberOfLines={1} style={styles.content_name}>{data.name}</Text>
                        <Text numberOfLines={1} style={styles.content_description}>{data.summary}</Text>
                        <View style={styles.content_more}>
                            <View style={styles.content_price}>
                                <Text numberOfLines={1} style={styles.price_text}>{FormatPrice(number * data.price_sale_off)}</Text>
                            </View>
                            <View style={styles.insert_left}>
                                <Text style={styles.quantity_text}>SL :</Text>
                            </View>
                            <View style={styles.insert_right}></View>
                            < View style={styles.edit}>
                                <EditQuantity quantity={number} quanityAddCart={(val) => handleChangeNumber(val)} />
                            </View>
                        </View>
                    </View>
                </View>
            )
            }
        </>
    )
}
export default ProductList