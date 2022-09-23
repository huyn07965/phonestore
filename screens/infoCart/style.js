import { StyleSheet } from 'react-native';
import { Color } from '../../contains';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 80,
        paddingVertical: 10,
        backgroundColor: Color.white
    },
    top: {
        width: '100%',
        height: '30%',
        paddingHorizontal: 25,
    },
    test: {
        alignSelf: 'center',
        fontSize: 24,
        color: Color.main,
        fontWeight: 'bold',
        paddingVertical: 10
    },

    textInput: {
        width: '100%',
        marginTop: 10,
        height: 50,
        borderRadius: 4,
        paddingLeft: 15,
        elevation: 2,
        backgroundColor: Color.background
    },
    buttonCheck: {
        width: '100%',
        height: 50,
        marginTop: 20,
        borderRadius: 11
    },
    boxButton: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 11
    },
    textColor: {
        color: Color.white,
        fontWeight: 'bold',
        fontSize: 18
    },
    checkCart: {
        width: '100%',
        height: '70%',
        position: 'absolute',
        top: 225,
        marginBottom: 10
    }

})

export default styles;