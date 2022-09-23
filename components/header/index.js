import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import IconHeader from '../iconHeader'
import styles from './style'
import BoxSearch from '../boxSearch'

const Header = ({ icon, info }) => {

  let iconRight = 'cart'
  switch (icon) {
    case 'delete':
      iconRight = 'delete'
      break;
    case 'sort':
      iconRight = 'sort'
      break;
  }


  return (
    <>
      {!info ? (
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.top}>
              <View style={styles.search}>
                <BoxSearch home />
              </View>
              <View style={styles.extension}>
                <IconHeader name={iconRight} />
              </View>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.container_info}>
          <View style={styles.content_info}>
            <IconHeader name={'nofication'} info />
            <IconHeader name={'cart'} info />
          </View>
        </View>
      )
      }
    </>
  )
}

export default Header

