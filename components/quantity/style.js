import { StyleSheet } from 'react-native'
import { Color } from '../../contains'

const styles = StyleSheet.create({

    container_cart: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button_cart: {
        width: 30,
        height: 33,
        backgroundColor: Color.main,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        borderRadius: 8
    },
    button_text_cart: {
        fontSize: 22,
        color: Color.white
    },
    text_cart: {
        fontSize: 18,
        color: Color.black
    },
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: '30%',
        height: 40,
        backgroundColor: Color.background,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10
    },
    button_text: {
        fontSize: 22
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.main
    }
})

export default styles