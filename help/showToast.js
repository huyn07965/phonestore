import Toast from 'react-native-root-toast'
import { Color } from '../contains'

export default function ShowToast(message) {
    return (
        Toast.show(message, {
            position: 60,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
            backgroundColor: '#212b23',
            opacity: 0.8
        })
    )
}