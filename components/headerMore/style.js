import { StyleSheet } from 'react-native'
import { Color } from '../../contains'

const styles = StyleSheet.create({
    container: {

    },
    header: {
        paddingHorizontal: 20,
        paddingBottom: 10,
        paddingTop: 25,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerLeft: {
        flexDirection: 'row',
        marginLeft: -10
    },
    titleHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        color: Color.white,
    },
})

export default styles