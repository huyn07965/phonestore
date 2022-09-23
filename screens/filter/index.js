import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './style'
import { ButtonFilter } from '../../components'
import { IconHeader } from '../../components'
import RangeSlider from 'react-native-range-slider-expo'
import { useDispatch, useSelector } from 'react-redux'
import { Filter } from '../../store/slices/filter'
import { FormatPrice } from '../../help'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'

const FavoriteScreen = () => {

    const items = useSelector(state => state.Filter.items);
    const navigation = useNavigation();
    const [fromValue, setFromValue] = useState(items.fromValue);
    const [toValue, setToValue] = useState(items.toValue);
    const [active, setActive] = useState(items.active);
    const dispatch = useDispatch();

    const activeButton = (title) => {
        setActive(title);
    }

    const apply = () => {
        dispatch(Filter({ active, fromValue, toValue }))
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.filter_1}>
                    <Text style={styles.title_filter}>Lọc theo giá</Text>
                    <View>
                        <RangeSlider min={0} max={50000000}
                            fromValueOnChange={value => setFromValue(value)}
                            toValueOnChange={value => setToValue(value)}
                            initialFromValue={fromValue}
                            initialToValue={toValue}
                            fromKnobColor='#0ca89e'
                            toKnobColor='#0ca89e'
                            valueLabelsBackgroundColor='#80e4c4'
                            inRangeBarColor='#7e8580' />
                    </View>
                    <View style={styles.result_filter}>
                        <Text style={styles.text}>Giá từ : </Text>
                        <Text style={styles.text_price}>{FormatPrice(fromValue)}</Text>
                        <Text style={styles.text}> đến </Text>
                        <Text style={styles.text_price}>{FormatPrice(toValue)}</Text>
                    </View>
                </View>
                <View style={styles.filter_2}>
                    <Text style={styles.title_filter}>Lọc theo thứ tự</Text>
                    <View style={styles.button_1}>
                        <ButtonFilter active={active} onPress={activeButton} title={'Tăng dần'} />
                        <ButtonFilter active={active} onPress={activeButton} title={'Giảm dần'} />
                    </View>
                    <View style={styles.button_1}>
                        <ButtonFilter active={active} onPress={activeButton} title={'Mới nhất'} />
                        <ButtonFilter active={active} onPress={activeButton} title={'Cũ nhất'} />
                    </View>
                </View>
                <View>
                    <Text style={styles.title_filter}>Lọc theo tình trạng</Text>
                    <View style={styles.button_3}>
                        <ButtonFilter active={active} onPress={activeButton} title={'Đang giảm giá'} />
                    </View>
                </View>
            </View>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#0ca89e', '#0cb0a5', '#80e4c4']}
                style={styles.buttonFilter}>
                <TouchableOpacity onPress={apply} style={styles.apply}>
                    <Text style={styles.apply_text}>Áp dụng</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
}

export default FavoriteScreen