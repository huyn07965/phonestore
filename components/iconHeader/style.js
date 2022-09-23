import { StyleSheet } from 'react-native'
import { Color } from '../../contains'

const styles = StyleSheet.create({
    quantity: {
        width: '60%',
        height: 15,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: Color.red,
        color: Color.red,
        position: 'absolute',
        top: -8,
        right: -8,
        fontSize: 12,
        fontWeight: 'bold'
    },
    quantity_text: {
        color: Color.white,
        fontSize: 12,
        fontWeight: 'bold'
    }
})

export default styles