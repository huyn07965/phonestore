import { StyleSheet } from 'react-native';
import { Color } from '../../contains'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white
    },
    boxImg: {
        width: '100%',
        height: '30%',
        marginTop: 15
    },
    img: {
        width: '100%',
        height: '100%'
    },
    title: {
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title_text: {
        fontSize: 26,
        fontWeight: 'bold',
        color: Color.main
    },
    description: {
        fontSize: 16,
        color: Color.darkGray,
        marginTop: 10

    },
    content: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        marginTop: 15,
    },
    input: {
        elevation: 2,
        paddingHorizontal: 24,
        paddingVertical: 10,
        backgroundColor: Color.white,
        borderRadius: 11,
        marginBottom: 25,
        flexDirection: 'row',
        alignItems: 'center'
    },
    fogot: {
        width: '100%',
        height: '10%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginBottom: 20
    },
    icon_input: {
        color: Color.main,
        marginEnd: 15
    },
    fogot_text: {
        fontSize: 16,
        color: Color.main
    },
    button: {
        width: '100%',
        height: 50,
        borderRadius: 3,
    },
    button_login: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: Color.white,
        fontSize: 18,
        fontWeight: 'bold'
    },
    signUp: {
        width: '100%',
        height: '8%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        flexDirection: 'row',
    },
    signUp_title: {
        fontSize: 16,
        color: Color.darkGray
    },
    signUp_text: {
        fontSize: 16,
        color: Color.main
    },
    back: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: -50,
        left: 30,
    },
    icon_back: {
        color: Color.main,
        marginLeft: -20
    },
    back_text: {
        fontSize: 16,
        color: Color.main,
    }
})

export default styles