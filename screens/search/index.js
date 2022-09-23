import React, { useState, useEffect } from 'react'
import { View, FlatList, Text } from 'react-native'
import { Product, Header } from '../../components'
import { useRoute } from '@react-navigation/native'
import styles from './style'
import { useDispatch } from 'react-redux'
import { fetchProduct } from '../../store/slices/product'
import { Skeleton } from '../../common'
import HighlightText from '@sanar/react-native-highlight-text';

const InfoSearchScreen = () => {
    const route = useRoute();
    const { search } = route.params
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState({})

    useEffect(() => {
        setLoading(true)
        dispatch(fetchProduct({ search }))
            .then(res => {
                if (!res.error) {
                    setItems(res.payload.data)
                    setLoading(false)
                }
            })
    }, [search])

    if (loading) {
        return <Skeleton />
    }

    const highlightName = (string) => {
        return (
            <HighlightText
                highlightStyle={{ backgroundColor: 'yellow' }}
                searchWords={[search]}
                textToHighlight={string}
            />
        )
    }

    const showItems = ({ item }) => {
        let product = {
            ...item,
            name: highlightName(item.name)
        }
        return (
            <Product data={product} />
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.aside}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={items}
                    renderItem={showItems}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    overScrollMode="never"
                />
            </View>
        </View>
    )
}

export default InfoSearchScreen
