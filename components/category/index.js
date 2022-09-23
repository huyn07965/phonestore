import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './style'

const Category = ({ items }) => {
    const navigation = useNavigation()

    const showProduct = (item) => {
        navigation.navigate('CategoryScreen', {
            id: item.id,
            name: item.name
        })
    }

    const showItems = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => showProduct(item)} style={styles.box}>
                <View style={styles.boxCategory}>
                    <Image style={styles.imgItem} source={{ uri: item.image }} />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <FlatList
                    data={items}
                    renderItem={showItems}
                    keyExtractor={(item) => item.name.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    overScrollMode="never"
                />
            </View>
        </View>
    )
}

export default Category
