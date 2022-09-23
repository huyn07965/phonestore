import { StyleSheet } from 'react-native'
import { Color } from '../../contains'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        backgroundColor: Color.white,
        paddingTop: 25
    },
    content: {
        width: '100%',
        marginTop: 15,
        alignItems: 'center',
    },
    container_info: {
        width: '100%',
        height: 95,
        backgroundColor: Color.white,
        paddingTop: 15
    },
    content_info: {
        width: '100%',
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 23
    },
    top: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 10,
    },
    search: {
        width: '83%',
        height: 40,
    },
    extension: {
        width: 40,
        height: 40,
        borderRadius: 11,
        borderWidth: 1,
        borderColor: Color.main,
        backgroundColor: Color.main,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: -5
    }
})

export default styles;