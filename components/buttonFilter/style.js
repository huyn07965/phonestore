import { StyleSheet } from 'react-native'
import { Color } from '../../contains'

const styles = StyleSheet.create({
    button: {
        backgroundColor: Color.main,
        borderRadius: 5,
        elevation: 5,
        height: 50,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: Color.white,
        fontWeight: 'bold',
        fontSize: 16
    },
    active: {
        backgroundColor: Color.black,
    }
})

export default styles;