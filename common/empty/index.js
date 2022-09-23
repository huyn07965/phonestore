import React from 'react'
import styles from './style'
import { Image, View, Text } from 'react-native'

const Empty = ({ favorite }) => {
    return (
        <>
            {favorite ? (
                <View style={styles.container}>
                    <View style={styles.boxImg}>
                        <Image style={styles.img} source={require('../../assets/empty.png')} />
                    </View>
                    <Text style={styles.text}>Chưa có dữ liệu</Text>
                </View>
            )
                :
                (
                    <View style={styles.container}>
                        <View style={styles.boxImg}>
                            <Image style={styles.img} source={require('../../assets/emptycart.png')} />
                        </View>
                        <Text style={styles.text}>Chưa có dữ liệu</Text>
                    </View>
                )

            }
        </>
    )
}

export default Empty