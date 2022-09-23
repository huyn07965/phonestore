import { StyleSheet } from 'react-native'
import { Color } from '../../contains'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        paddingVertical: 20,
        backgroundColor: Color.white
    },
    formInput: {
        width: '100%',
        marginBottom: 20
    },
    handle_update: {
        height: 50,
        width: '100%',
        marginTop: 20,
    },
    update: {
        alignSelf: 'center',
        height: '100%',
        width: '100%',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text_update: {
        color: Color.white,
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default styles