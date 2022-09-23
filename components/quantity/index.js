import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './style'

const EditQuantity = ({ quanityAddCart, quantity, product }) => {

    const handleChange = (type) => {
        switch (type) {
            case 'add':
                quanityAddCart(quantity + 1)
                break;
            case 'minus':
                if (quantity - 1 === 0) {
                    quanityAddCart(0)
                } else {
                    quanityAddCart(quantity - 1 === 0 ? 1 : quantity - 1)
                }
                break;
            default:
                break;
        }
    }

    return (
        <>
            {!product ? (
                <View style={styles.container_cart}>
                    <TouchableOpacity onPress={() => handleChange('minus')} style={styles.button_cart}>
                        <Text style={styles.button_text_cart}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.text_cart}>{quantity}</Text>
                    <TouchableOpacity onPress={() => handleChange('add')} style={styles.button_cart}>
                        <Text style={styles.button_text_cart}>+</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => handleChange('minus')} style={styles.button}>
                        <Text style={styles.button_text}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>{quantity}</Text>
                    <TouchableOpacity onPress={() => handleChange('add')} style={styles.button}>
                        <Text style={styles.button_text}>+</Text>
                    </TouchableOpacity>
                </View>
            )
            }
        </>
    )
}

export default EditQuantity