import { StyleSheet } from 'react-native'
import { Color } from '../../contains'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white
  },
  body: {
    paddingHorizontal: 20,
  },
  result_filter: {
    flexDirection: 'row',
    marginTop: 100,
    marginLeft: 15
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10
  },
  text_price: {
    color: Color.red,
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10
  },
  filter_1: {
    paddingVertical: 20
  },
  filter_2: {
    paddingVertical: 20
  },
  filter_3: {
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  button_1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  button_3: {
    marginLeft: 20
  },
  title_filter: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
    marginLeft: 15,
  },
  buttonFilter: {
    width: '80%',
    height: 50,
    position: 'absolute',
    bottom: 15,
    borderRadius: 11,
    alignSelf: 'center'
  },
  apply: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  apply_text: {
    color: Color.white,
    fontWeight: 'bold',
    fontSize: 18
  }

})

export default styles