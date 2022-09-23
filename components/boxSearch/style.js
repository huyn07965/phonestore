import { StyleSheet } from 'react-native'
import { Color } from '../../contains'


const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.background,
    width: '100%',
    height: '100%',
    borderRadius: 11,
    borderWidth: 1,
    borderColor: Color.darkGray,
    elevation: 1
  },
  container_cate: {
    backgroundColor: Color.white,
    width: '100%',
    height: '100%',
    borderRadius: 11,
    borderWidth: 1,
    borderColor: Color.main,
    elevation: 1
  },
  search: {
    width: '100%',
    height: '100%',
    backgroundColor: Color.background,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    height: '100%',
    backgroundColor: Color.white,
    backgroundColor: Color.background,
    marginBottom: 10
  }
})

export default styles;