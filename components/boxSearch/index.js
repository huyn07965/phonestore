import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './style'
import IconHeader from '../iconHeader'
import { View } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { useRoute } from '@react-navigation/native'

const BoxSearch = ({ home }) => {

    const route = useRoute()
    const navigation = useNavigation()
    const [search, setSearch] = useState(route.params?.search || '')

    const changePage = () => {
        if (route.name === 'SearchScreen') {
            navigation.setParams({
                search
            })
        } else {
            if (search) {
                navigation.navigate('SearchScreen', {
                    search
                })
            }
        }
    }

    return (
        <>
            {home ? (
                <View style={styles.container}>
                    <SearchBar
                        placeholder="Tìm kiếm..."
                        onChangeText={(search) => setSearch(search)}
                        value={search}
                        containerStyle={styles.search}
                        inputContainerStyle={styles.input}
                        lightTheme
                        onSubmitEditing={changePage}
                    />
                </View>
            ) : (
                <View style={styles.container_cate}>
                    <SearchBar
                        placeholder="Tìm kiếm..."
                        onChangeText={(search) => setSearch(search)}
                        value={search}
                        containerStyle={styles.search}
                        inputContainerStyle={styles.input}
                        lightTheme
                        onSubmitEditing={changePage}
                    />
                </View>
            )}
        </>
    )
}
export default BoxSearch