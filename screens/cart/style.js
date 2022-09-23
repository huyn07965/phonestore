import { StyleSheet } from 'react-native'
import { Color } from '../../contains'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white,
    },
    body: {
        backgroundColor: Color.white,
    },
    list: {
        alignItems: 'center',
        marginBottom: 10
    },
    add: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.white,
        elevation: 10
    },
    add_quanity: {
        height: '65%',
        width: '55%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.white
    },
    add_quanity_more: {
        width: '80%',
        height: '100%',
        flexDirection: 'row',
        backgroundColor: Color.background,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8
    },
    title_quanity: {
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 20,
        color: Color.main,
    },
    quantity: {
        flexDirection: 'row',
        width: '60%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderStartWidth: 2,
        borderColor: Color.gray
    },
    number_quanity: {
        fontWeight: 'bold',
        fontSize: 16
    },
    add_buy: {
        width: '40%',
        height: '65%'
    },
    add_buy_more: {
        width: '100%',
        height: '100%',
        backgroundColor: Color.orange,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    add_buy_text: {
        color: Color.white,
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default styles