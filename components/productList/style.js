import { StyleSheet } from 'react-native'
import { Color } from '../../contains'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Color.background,
        width: '95%',
        height: 150,
        paddingVertical: 10,
        backgroundColor: 'white',
    },
    container_buy: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 150,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: Color.background,
        backgroundColor: 'white',
    },
    bgimg: {
        width: 100,
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        backgroundColor: Color.background,
        borderRadius: 11,
        paddingHorizontal: 20,
        paddingVertical: 2,
        elevation: 2
    },
    img: {
        width: '100%',
        height: '80%',
        resizeMode: 'center'
    },
    content: {
        marginHorizontal: 18
    },
    content_buy: {
        marginHorizontal: 10
    },
    content_name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    content_description: {
        marginBottom: 10
    },
    content_price: {
        width: '50%',
        backgroundColor: Color.white

    },
    price_text: {
        color: 'red',
        fontSize: 16
    },
    content_more: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    edit: {
        width: '30%',
        marginLeft: 10,
    },
    button: {
        width: 30,
        height: 30,
        backgroundColor: Color.main,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10
    },
    button_text: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    insert_right: {
        width: 45,
        height: 40,
        backgroundColor: Color.white,
        position: 'absolute',
        right: 35,
        bottom: 0,
        zIndex: 2
    },
    insert_left: {
        width: 45,
        height: 40,
        backgroundColor: Color.white,
        position: 'absolute',
        right: 105,
        bottom: 0,
        zIndex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    quantity_text: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 7,
        color: Color.main
    }
})

export default styles