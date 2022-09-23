import { StyleSheet } from 'react-native';

import { Color } from '../../contains'

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.background
    },
    body: {
        width: '100%',
        height: '100%'

    },
    product: {
        width: '100%'
    },
    product_list: {
        width: '100%',
        alignSelf: 'center'
    },
    sum: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderTopColor: Color.background,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: Color.background,
        backgroundColor: Color.white
    },
    title_sum: {
        fontWeight: 'bold',
        fontSize: 18
    },
    number_sum: {
        fontWeight: 'bold',
        fontSize: 16,
        color: Color.red
    },
    form: {
        paddingHorizontal: 20,
        marginTop: 40
    },
    salePrice: {
        marginTop: 10,
        color: Color.main
    },
    sumALl: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 40,
        borderTopColor: Color.main,
        borderTopWidth: 1,
        paddingTop: 20
    },
    apply: {
        alignItems: 'center',
        marginVertical: 20,
    },
    viewPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    applyButton: {
        width: '100%',
        height: '100%',
        backgroundColor: Color.orange,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    applyButtonText: {
        color: Color.white,
        fontSize: 16,
        fontWeight: 'bold'
    },
    title_thanks: {
        color: Color.main,
        fontSize: 22,
        fontWeight: 'bold'
    },
    title_code: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    code: {
        color: Color.red,
        fontSize: 18,
        paddingVertical: 5
    },
    title_back: {
        color: Color.main,
        fontSize: 18
    }
})

export default styles;