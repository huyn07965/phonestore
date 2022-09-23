import { StyleSheet } from 'react-native'
import { Color } from '../../contains'


const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        width: '100%',
        height: 220,
        backgroundColor: Color.white,
        alignItems: 'center'
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    input: {
        backgroundColor: Color.background,
    },
    slider: {
        backgroundColor: Color.white,
        elevation: 3,
        borderRadius: 8,
        width: '100%',
        height: '95%',
        elevation: 6,
    },
    pagination: {
        position: 'absolute',
        top: '100%',
        width: '100%',
        alignItems: 'center'
    },
    dotStyle: {
        width: 40,
        height: 3,
        marginHorizontal: -7,
        marginTop: 5,
        backgroundColor: Color.black
    },
})

export default styles;