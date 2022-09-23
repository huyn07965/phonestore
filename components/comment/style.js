import { StyleSheet, Dimensions } from 'react-native'
import { Color } from '../../contains'

const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Color.white
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
    marginHorizontal: 10
  },
  conment: {
    width: '100%',
    height: 120,
    borderTopWidth: 1,
    borderTopColor: Color.background,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center'
  },
  conment_avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 30,
  },
  conment_avatar_img: {
    width: '100%',
    height: '100%',
    borderRadius: 50
  },
  content: {
    justifyContent: 'space-around'
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: -10,
    color: Color.main
  },
  more: {
    width: '100%',
    height: 30,
    backgroundColor: Color.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  text_more: {
    fontSize: 16,
    color: Color.orange
  },
  icon: {
    marginLeft: -15,
  }
})

export default styles;