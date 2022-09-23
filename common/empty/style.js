import { StyleSheet } from 'react-native'
import { Color } from '../../contains'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.white,
    },
    boxImg: {
        width: '100%',
        height: '65%',
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'center'
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Color.main
    }
})

export default styles