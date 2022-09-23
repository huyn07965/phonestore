import { StyleSheet } from 'react-native'
import { Color } from '../../contains'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white
    },
    container_more: {
        width: '100%',
        height: '100%',
        marginBottom: 20
    },
    header: {
        width: '100%',
        height: '30%',
        alignItems: 'center'
    },
    info: {
        width: '100%',
        height: '100%',
        alignItems: 'flex-start',
        backgroundColor: Color.white,
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: Color.background,
    },
    top: {
        height: '60%',
        flexDirection: 'row'
    },
    text: {
        height: '100%',
        width: '80%',
        paddingHorizontal: 5,
        marginTop: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 10,
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    user_more: {
        width: 125,
        height: 24,
        backgroundColor: Color.main,
        borderRadius: 15,
        alignItems: 'center',
        marginLeft: -20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    description_user: {
        color: Color.white,
        marginLeft: 23,
        fontWeight: 'bold',
    },
    description: {
        color: Color.black,
        marginLeft: 23,
        fontWeight: 'bold',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 300,
    },
    bottom: {
        width: '100%',
        height: '40%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    endow: {
        width: '20%',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    icon: {
        height: 40,
        marginTop: 5
    },
    function: {
        marginTop: 10,
        fontSize: 16,
        color: Color.darkGray
    },
    body: {
        width: '100%',
        height: '70%',
        backgroundColor: Color.white,
        elevation: 1,
        marginBottom: 20,
        alignSelf: 'center',
    },
    content: {
        width: '100%',
        height: '100%',
        marginTop: 10,
        paddingHorizontal: 20,
    },
    body_top: {
        width: '112%',
        height: '24%',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: Color.background,
        alignSelf: 'center',

    },
    body_bottom: {
        width: '112%',
        height: '38%',
        borderBottomWidth: 1,
        borderColor: Color.background,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    directional: {
        width: '100%',
        height: 55,
        flexDirection: 'row',
        paddingHorizontal: 25,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
    },
    directional_more: {
        flexDirection: 'row'
    },
    icon_bottom: {
        width: 30,
        alignItems: 'center',
    },
    title: {
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#42524a'
    },

})

export default styles