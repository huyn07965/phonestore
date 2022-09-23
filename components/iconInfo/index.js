import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons, FontAwesome5, Feather, MaterialCommunityIcons, Foundation, MaterialIcons, SimpleLineIcons, Octicons, Entypo } from '@expo/vector-icons'
import styles from './style'
import { Color } from '../../contains'

const IconInfo = ({ name }) => {


    let icon = '';

    switch (name) {
        case 'infoShip':
            icon = <Entypo name="info-with-circle" size={22} color="#5a6ac7" />

            break;
        case 'infoCart':
            icon = <FontAwesome5 name="shipping-fast" size={22} color="#eb8a2f" />

            break;
        case 'policyShopping':
            icon = (
                <Foundation name="clipboard-notes" size={24} color="#eb2fce" />
            )
            break;
        case 'rate':
            icon = (
                <Ionicons name="star-half-outline" size={30} color={Color.main} />
            )
            break;
        case 'report':
            icon = (
                <Octicons name="report" size={27} color={Color.main} />
            )
            break;
        case 'chat':
            icon = (
                <Ionicons name="chatbox-ellipses-outline" size={33} color={Color.main} />
            )
            break;
        case 'coin':
            icon = (
                <FontAwesome5 name="coins" size={30} color={Color.main} />
            )
            break;
        case 'policyInsurance':
            icon = (
                <Entypo name="text-document" size={24} color="#2febbc" />
            )
            break;
        case 'myStore':
            icon = (
                <Entypo name="shop" size={24} color="#e61030" />
            )
            break;
        case 'darkMode':
            icon = (
                <MaterialIcons name="nights-stay" size={26} color="#6510e6" />
            )
            break;
        case 'help':
            icon = (
                <Feather name="help-circle" size={24} color="#10e650" />
            )
            break;
        case 'crown':
            icon = (
                <TouchableOpacity style={styles.crown}>
                    <MaterialCommunityIcons name="crown" size={24} color="yellow" />
                </TouchableOpacity>
            )
            break;
        case 'login':
            icon = <MaterialCommunityIcons name="login" size={24} color="#0ca89e" />

            break;
        case 'logout':
            icon = <MaterialCommunityIcons name="logout" size={24} color="#0ca89e" />

            break;
        case 'userLogin':
            icon = <SimpleLineIcons name="user-following" size={24} color="#45a8de" />

            break;
        case 'userLogout':
            icon =
                <SimpleLineIcons name="user-unfollow" size={24} color="#45a8de" />
            break;
        case 'next':
            icon =
                <MaterialIcons name="navigate-next" size={28} color="#b2b8b4" />
            break;
        default:
            break;
    }

    return (
        icon
    )
}

export default IconInfo