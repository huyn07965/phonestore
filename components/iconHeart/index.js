import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Color } from '../../contains'

const IconHeart = ({ heart }) => {
    let iconName = heart ? 'ios-heart' : 'ios-heart-outline'

    return (
        <Ionicons name={iconName} size={26} color={Color.white} />
    )
}

export default IconHeart
