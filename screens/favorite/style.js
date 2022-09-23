import { StyleSheet } from 'react-native'
import { Color } from '../../contains'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white
  },
  aside: {
    backgroundColor: Color.white,
    paddingHorizontal: 4,
    paddingBottom: 30
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingBottom: 5,
    paddingTop: 5,
    color: Color.main
  }
})

export default styles