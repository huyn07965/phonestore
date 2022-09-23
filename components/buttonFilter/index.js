import React from 'react'
import { Text , TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './style'

const ButtonFilter = ({title, onPress, active}) => {
    const choseButton = () => {
        onPress(title)
    }
    return (
        <TouchableOpacity onPress={choseButton} style={[styles.button, (active === title && styles.active)]}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonFilter 