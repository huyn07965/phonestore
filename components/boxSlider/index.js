import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './style';
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSlider } from '../../store/slices/slider'
import { Skeleton } from '../../common'

const BoxSlider = () => {
  const [entries, setEntries] = useState(0)
  const [activeSlide, setActiveSlide] = useState(0)
  const dispatch = useDispatch();
  const dataslider = useSelector(state => state.Slider.items)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    dispatch(fetchSlider())
      .then((res) => {
        if (!res.error) {
          setLoading(false)
          setEntries(res.payload.length)
        }
      })
  }, [])

  const renderItems = (item) => {
    return (
      <View style={styles.slider}>
        <Image style={styles.img} source={{ uri: item.item.image }}></Image>
      </View>
    );
  }
  const pagination = () => {
    return (
      <Pagination
        dotsLength={entries}
        activeDotIndex={activeSlide}
        dotStyle={styles.dotStyle}
        inactiveDotOpacity={0.2}
        inactiveDotScale={0.8}
      />
    );
  }

  if (loading) {
    return <Skeleton layout={'layoutSlider'} />
  }

  return (
    <View style={styles.container}>
      <Carousel
        data={dataslider}
        renderItem={renderItems}
        activeSlideAlignment='center'
        sliderWidth={380}
        itemWidth={380}
        onSnapToItem={(index) => setActiveSlide(index)} />
      <View style={styles.pagination}>{pagination()}</View>
    </View>
  );

}
export default BoxSlider;