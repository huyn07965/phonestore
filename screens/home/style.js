import { StyleSheet } from 'react-native'
import { Color } from '../../contains'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white
    },
    aside: {
        backgroundColor: Color.white,
    },
    category_more: {
        backgroundColor: Color.white,
        marginTop: 5,
        justifyContent: 'center'
    },
    slider: {
        marginTop: -10,
        height: 250
    }
})

export default styles