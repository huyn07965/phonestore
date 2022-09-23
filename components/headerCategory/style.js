import { StyleSheet } from 'react-native';
import { Color } from '../../contains';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 137
    },
    content: {
        width: '100%',
        marginTop: 35,
        alignItems: 'center',
    },
    top: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    search: {
        width: '95%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8
    },
    name: {
        fontWeight: 'bold',
        fontSize: 20,
        color: Color.white
    }

})

export default styles;