import { StyleSheet } from 'react-native'
import { Color } from '../../contains'


const styles = StyleSheet.create({
  container: {
    width: 190,
    height: 380,
    marginTop: 10,
    paddingHorizontal: 5,
  },
  product: {
    backgroundColor: Color.second,
    width: '100%',
    height: '100%',
    borderRadius: 3,
    borderWidth: 0.1,
    borderColor: Color.background,
    paddingBottom: 10,
  },
  boxImg: {
    width: '100%',
    height: '65%',
    alignItems: 'center',
    backgroundColor: Color.background,
    padding: 5,
    borderRadius: 3
  },
  imgItem: {
    width: '60%',
    height: '100%',
    resizeMode: 'center'
  },
  titleProduct: {
    height: '35%',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    marginTop: 5,
    marginLeft: 5
  },
  iconLike: {
    height: 35,
    width: 35,
    position: 'absolute',
    bottom: 19,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Color.main,
    backgroundColor: Color.main,
    borderRadius: 11
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  title: {
    color: Color.darkGray,
  },
  sale: {
    width: 90,
    height: 20,
    position: 'absolute',
    top: -245,
    right: 0.5,
    alignItems: 'center',
    marginLeft: -8,

  },
  saleImg: {
    width: '100%',
    height: '160%',
    position: 'absolute',
  },
  boxSale: {
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  saleOf: {
    fontSize: 14,
    color: Color.white,
    fontWeight: 'bold',
    marginLeft: 6
  },
  price: {
    color: Color.red,
    fontWeight: 'bold',
    fontSize: 16,
  }

})

export default styles;