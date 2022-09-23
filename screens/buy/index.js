import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import { ProductList, InputStyle } from '../../components'
import { FormatPrice } from '../../help'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper'
import { fetchAsyncBuy } from '../../store/slices/buy'
import { RemoveAll } from '../../store/slices/cart'
import styles from './style'
import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'



const BuyScreen = () => {

    const router = useRoute()
    const cartItems = useSelector(state => state.Cart.cart)
    const { total } = router.params
    const { quantity } = router.params
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false)
    const [code, setCode] = useState('')
    const navigation = useNavigation()

    const hideDialog = () => setVisible(false);

    const handleSuccess = () => {
        setVisible(false)
        dispatch(RemoveAll())
        navigation.navigate('Home')
    }

    const handleBuy = () => {
        dispatch(fetchAsyncBuy({ data: cartItems }))
            .then(res => {
                if (!res.error) {
                    setCode(res.payload.code)
                    setVisible(true)
                } else {
                    console.log('lỗi')
                }
            })
    }


    const handleRender = ({ item }) => {
        return <ProductList item={item} />
    }


    return (
        <>
            <ScrollView style={styles.container} overScrollMode="never">
                <View style={styles.body}>
                    <View style={styles.product}>
                        <View style={styles.product_list}>
                            <FlatList
                                data={cartItems}
                                renderItem={handleRender}
                                keyExtractor={(item) => item.id.toString()}
                                overScrollMode="never"
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>

            <Provider>
                <View>
                    <Portal>
                        <Dialog visible={visible} onDismiss={hideDialog}>
                            <Dialog.Title style={styles.title_thanks}>Cảm ơn bạn đã mua hàng</Dialog.Title>
                            <Dialog.Content>
                                <Paragraph style={styles.title_code}>Mã đơn hàng của bạn là : </Paragraph>
                                <Paragraph style={styles.code}>{code}</Paragraph>
                            </Dialog.Content>
                            <Dialog.Actions>
                                <Button onPress={handleSuccess}>
                                    <Paragraph style={styles.title_back}>Hoàn tất</Paragraph>
                                </Button>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </View>
            </Provider>

            <View style={styles.sum}>
                <Text style={styles.title_sum}>Giá trị đơn hàng :</Text>
                <Text numberOfLines={1} style={styles.number_sum}>{FormatPrice(total)}</Text>
            </View>
            <View style={styles.add}>
                <View style={styles.add_quanity}>
                    <View style={styles.add_quanity_more}>
                        <Text style={styles.title_quanity}> SL </Text>
                        <View style={styles.quantity}>
                            <Text style={styles.number_quanity}>{quantity}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.add_buy}>
                    <TouchableOpacity onPress={handleBuy} style={styles.applyButton}>
                        <Text style={styles.applyButtonText}>Thanh toán</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )

}

export default BuyScreen
