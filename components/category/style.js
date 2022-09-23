import { StyleSheet } from 'react-native'
import { Color } from '../../contains'

const styles = StyleSheet.create({
  container: {
    height: 80
  },
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: Color.white,
    paddingTop: 10,
  },
  box: {
    height: 45,
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: Color.white,
    borderRadius: 11,
    elevation: 3,
  },
  boxCategory: {
    width: 90,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgItem: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  }

})

export default styles;