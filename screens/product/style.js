import { StyleSheet } from 'react-native'
import { Color } from '../../contains'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white
    },
    product: {
        height: 330,
        width: '100%',
        alignItems: 'center',
        backgroundColor: Color.background
    },
    productImg: {
        width: '50%',
        height: '100%',
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'center'
    },
    productContent: {
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'flex-start',

    },
    view: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flex: 1,
        backgroundColor: Color.white,
        paddingTop: 30,
        paddingHorizontal: 15
    },
    view_main: {
        marginBottom: 10,
    },
    price: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    priceDetail: {
        width: '75%',
    },
    priceText: {
        color: Color.main,
        fontSize: 20,
        fontWeight: 'bold'
    },
    oldPrice: {
        textDecorationLine: 'line-through',
        color: Color.gray,
        fontSize: 16,
    },
    sale: {
        width: 90,
        height: 20,
        alignItems: 'center',
        marginLeft: -8,
        marginTop: 4

    },
    saleImg: {
        width: '100%',
        height: '140%',
        position: 'absolute',
    },
    boxSale: {
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    salePr: {
        fontSize: 14,
        color: Color.white,
        fontWeight: 'bold'
    },
    saleOf: {
        fontSize: 14,
        color: Color.white,
        fontWeight: 'bold',
    },
    name: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textName: {
        width: '65%',
        fontSize: 20,
        fontWeight: 'bold',
        color: Color.black,
    },
    configuration: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10
    },
    configuration_text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 10,
        color: Color.black,
        marginLeft: -5
    },
    boxProduct: {
        height: '100%',
        marginLeft: -5
    },
    quantity_button: {
        width: 50,
        height: '100%',
        backgroundColor: Color.background,
        justifyContent: 'center',
        alignItems: 'center'
    },
    quantity_buttonText: {
        fontSize: 18
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
        justifyContent: 'space-between',
        alignItems: 'center',
        borderStartWidth: 2,
        borderColor: Color.gray
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