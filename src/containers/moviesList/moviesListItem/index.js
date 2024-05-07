/**
 * MoviesListItem
 */
import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { ImageView } from '../../../components'
import { getCompleteUrl } from '../../../utils/baseUrl'
import { styles } from './styles'

const MoviesListItem = (props) => {
  const { item, onItemPress, index } = props || {}
  const { title, poster_path, id } = item || {}

  return (
    <TouchableOpacity
      key={id}
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => onItemPress(item)}
    >
      <View style={styles.itemStyle(index)}>
        <ImageView
          url={getCompleteUrl(poster_path)}
          resizeMode='cover'
          style={styles.imgView}
          containerstyle={styles.imgView}
        />
        <View style={styles.titleViewStyle}>
          <Text numberOfLines={2} style={styles.movieTitle}>
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default MoviesListItem
