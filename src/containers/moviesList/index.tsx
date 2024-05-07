import React, { useCallback, useEffect, useRef, useState } from 'react'
import { View, FlatList, ActivityIndicator, RefreshControl } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPopularMoviesRequest } from '../../redux/reducers/moviesListReducer'
import { isRTL, strings } from '../../i18n'
import { generateHeaders } from '../../utils/constants/apiHeaders'
import MoviesListItem from './moviesListItem'
import styles from './styles'
import { Header, Space } from '../../components'
import { AR, EN_US } from '../../utils/constants'

const MoviesListPage = ({ navigation }) => {
  const flatlistRef = useRef<FlatList>(null)
  const dispatch = useDispatch()
  const [page, setPage] = useState<number>(1)

  // useSelector
  const moviesListReducer = useSelector((state) => state.moviesListReducer)
  const {
    popularMoviesList = [],
    isMoviesPaginating,
    isMoviesPageFinished,
    isPopularMoviesLoading,
  } = moviesListReducer || {}

  useEffect(() => {
    handleFetchPopularMovies(1)
  }, [])

  /**
   * API Calls
   * Fetch Popular Movies
   */
  const handleFetchPopularMovies = useCallback(
    async (page: number, isRefresh = false) => {
      const bodyData = {
        page: page,
        language: isRTL() ? AR : EN_US,
      }
      const headers = await generateHeaders()
      dispatch(
        fetchPopularMoviesRequest({
          bodyData: bodyData,
          headers: headers,
          isRefresh: isRefresh,
        })
      )
    },
    [dispatch]
  )

  /**
   * callPullToRefresh
   */
  const callPullToRefresh = () => {
    setPage(1)
    handleFetchPopularMovies(1, true)
  }

  const onItemPress = useCallback((_item: any) => {}, [])

  const renderItem = ({ item, index }) => {
    return (
      <MoviesListItem
        item={item}
        index={index}
        onItemPress={onItemPress}
        key={index?.toString()}
      />
    )
  }

  /**
   * method for handling pagination when user reach to end of the list
   */
  const handleLoadMoreData = useCallback(
    (info) => {
      if (
        info?.distanceFromEnd > 0 &&
        !isMoviesPaginating &&
        !isMoviesPageFinished
      ) {
        const nextPage = page + 1
        setPage(nextPage)
        handleFetchPopularMovies(nextPage)
      }
    },
    [setPage, page]
  )

  /**
   * keyExtractor
   */
  const keyExtractor = useCallback((item) => {
    return item?.id
  }, [])

  /**
   * Returns footer section with ActivityIndicator
   */
  const listFooter = () => {
    if (!isMoviesPageFinished) {
      return (
        <ActivityIndicator
          size={'large'}
          color={styles.activityIndicatorColor}
        />
      )
    } else {
      return <Space height={100} />
    }
  }

  return (
    <View style={styles.container}>
      <Header
        headerTitle={strings('common.movies.popularMovies')}
        navigation={navigation}
      />
      <View style={styles.flatListContainer}>
        <FlatList
          ref={flatlistRef}
          numColumns={2}
          data={popularMoviesList}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          onEndReached={handleLoadMoreData}
          onEndReachedThreshold={0.5}
          ListFooterComponent={listFooter}
          removeClippedSubviews={true}
          initialNumToRender={10}
          maxToRenderPerBatch={5}
          windowSize={10}
          refreshControl={
            <RefreshControl
              refreshing={isPopularMoviesLoading}
              onRefresh={() => callPullToRefresh()}
            />
          }
        />
      </View>
    </View>
  )
}

export default MoviesListPage
