import { StyleSheet } from 'react-native';

import { Color } from '../../contains'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 5
    },
    textInputLabel: {
        color: Color.main,
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 2
    },
    textInput: {
        width: '100%',
        marginTop: 10,
        height: 50,
        borderRadius: 10,
        paddingLeft: 15,
        elevation: 2,
        backgroundColor: Color.white
    },
    iconShowPass: {
        position: 'absolute',
        right: 10,
        bottom: 10
    }
})

export default styles