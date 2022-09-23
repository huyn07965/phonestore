import React, { useEffect } from 'react'
import { View, Text, FlatList, Image, LogBox } from 'react-native'
import styles from './style'
import { MaterialIcons } from '@expo/vector-icons';

const COMMENT = [
    {
        name: "Nguyễn Gia Huy",
        avatar: require('../../assets/user.png'),
        data: 'Sản phẩm dùng tốt ',
    },
    {
        name: "Võ Trung Trực",
        avatar: require('../../assets/user.png'),
        data: 'Giao hàng rất nhanh, đáng được 5 sao ',
    },
]

const Comment = () => {

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

    const showItems = ({ item }) => {
        return (
            <View style={styles.conment}>
                <View style={styles.conment_avatar}>
                    <Image style={styles.conment_avatar_img} source={item.avatar} />
                </View>
                <View style={styles.content}>
                    <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
                    <Text numberOfLines={3} style={styles.data}>{item.data}</Text>
                </View>
            </View>
        )
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Nhận xét sản phẩm</Text>
                <FlatList
                    data={COMMENT}
                    renderItem={showItems}
                    keyExtractor={(item) => item.name.toString()}
                    overScrollMode="never"
                />
                <View style={styles.more}>
                    <Text style={styles.text_more}>Xem thêm</Text>
                    <MaterialIcons name="navigate-next" size={24} color="#f25235" />
                    <MaterialIcons style={styles.icon} name="navigate-next" size={24} color="#f25235" />
                </View>
            </View>


        </>
    )
}

export default Comment
