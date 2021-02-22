import React, { useEffect } from 'react';
import {
  Dimensions, StyleSheet, View, FlatList, Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import New from '../../components/News/News';
import { getNews } from './actionCreator';

const { height, width } = Dimensions.get('screen');
const Feed = () => {
  const newsReducer = useSelector((state) => state.ReducerFeed);
  const dispatch = useDispatch();
  const { news } = newsReducer;
  useEffect(() => {
    const getInNews = async () => {
      if (news.length === 0) await dispatch(getNews());
    };
    getInNews();
  }, [news]);
  const renderNews = ({ item }) => (
    <New
      urlImage={item.url}
      titleNews={item.titleNews}
      newsResume={item.newsResume}
      link={item.link}
      linkTitle={item.linkTitle}
    />
  );
  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={styles.generalContainer}>
        <View style={styles.newsCointainer}>
          <FlatList
            data={news}
            renderItem={renderNews}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  generalContainer: {
    flex: 1,
    backgroundColor: '#3c73f4',
    height: height * 0.9,
  },
  container: {
    height: height * 0.09,
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
  },
  newsCointainer: {
    width,
    height: height * 0.9,
  },
});

export default Feed;