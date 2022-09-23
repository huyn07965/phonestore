import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './style'
import IconHeart from '../iconHeart'
import { FormatPrice, SalePercent } from '../../help'
import { Images, MESSAGE } from '../../contains'
import { Favorite } from '../../store/slices/favorite'
import { useDispatch, useSelector } from 'react-redux'
import { Skeleton } from '../../common'
import ShowToast from '../../help/showToast'

const ProductHorizital = ({ data, sale = true }) => {
    const navigation = useNavigation()
    const [heart, setHeart] = useState(false)
    const dispatch = useDispatch();
    const dataFavorite = useSelector(state => state.Favorite.items)
    const isLogin = useSelector(state => state.Auth.isLogin)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        dataFavorite.indexOf(data.id) !== -1 ? setHeart(true) : setHeart(false)
        setLoading(false)
    }, [dataFavorite])

    if (loading) {
        return <Skeleton layout={'layoutProductHori'} />
    }

    const showProduct = () => {
        navigation.setParams({
            id: data.id
        })
    }

    const onHeart = () => {
        if (!isLogin) (
            ShowToast(MESSAGE.notLogin)
        )
        else {
            setHeart(!heart)
            dispatch(Favorite({ id: data.id }))
            if (heart === false) {
                ShowToast(MESSAGE.addFavoritesSuccess)
            } else {
                ShowToast(MESSAGE.deleteFavoritesSuccess)
            }
        }
    }

    return (
        <TouchableOpacity onPress={showProduct} style={styles.container}>
            <View style={styles.product}>
                <View style={styles.boxImg}>
                    <Image style={styles.imgItem} source={{ uri: data.image }} />
                </View>
                <View style={styles.titleProduct}>
                    <Text numberOfLines={1} style={styles.name} >{data.name}</Text>
                    <Text numberOfLines={1} style={styles.title}>{data.description}</Text>
                    {
                        sale && (
                            <View style={styles.sale} >
                                <Image style={styles.saleImg} source={Images.sale} />
                                <View style={styles.boxSale}>
                                    <Text style={styles.saleOf}>Đến</Text>
                                    <Text style={styles.saleOf}>{SalePercent(data.price, data.price_sale_off)}</Text>
                                </View>
                            </View>
                        )
                    }
                    <Text style={styles.price}>{FormatPrice(data.price_sale_off)}</Text>
                </View>
                <TouchableOpacity onPress={onHeart} style={styles.iconLike} >
                    {
                        !isLogin ? (
                            <IconHeart />
                        ) : (
                            <IconHeart heart={heart} />
                        )
                    }
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default ProductHorizital
