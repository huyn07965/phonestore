import { StyleSheet } from 'react-native'
import { Color } from '../../contains'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    aside: {
        backgroundColor: Color.white,
        paddingHorizontal: 4,
    },
    title: {
        backgroundColor: Color.white,
        height: 40,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        flexDirection: 'row',
        marginLeft: -10
    },
    title_text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})

export default styles;