import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import CallApi from '../Utils/CallApi';
import Store from '../Store/index';
import {getImagesData} from '../Store/action';
import {getData} from '../Store/middlewre';
import {connect} from 'react-redux';
import Swiper from 'react-native-swiper';
import styles from '../Themes/styles';

let Home = ({home, ...restProps}) => {
  let {data = []} = home || {};
  let [images, setImages] = useState([]);

  useEffect(() => {
    Store.dispatch(getImagesData());
  }, []);

  useEffect(() => {
    setImages(data);
    console.log('dataaaa', data.slice(0, 5));
  }, [data]);

  return (
    <View style={styles.parentview}>
      <ScrollView contentContainerStyle={{flexGrow: 1, marginHorizontal: 10}}>
        {images.length > 0 && (
          <Swiper
            style={{
              height: 200,
              marginBottom: 20,
            }}
            horizontal={true}
            activeDot={<View style={styles.activeDot} />}
            dot={<View style={styles.promotionDot} />}
            paginationStyle={{bottom: -2}}
            loop={true}
            autoplay={true}
            autoplayTimeout={2}>
            {images.length > 0 &&
              images.slice(0, 5).map((item, index) => {
                return (
                  <View key={index} style={styles.centerText}>
                    <Image
                      source={{uri: item}}
                      style={styles.carouselImageStyle}
                    />
                  </View>
                );
              })}
          </Swiper>
        )}
        <FlatList
          data={images}
          style={{flex: 1}}
          columnWrapperStyle={{
            justifyContent: 'space-evenly',
          }}
          nestedScrollEnabled
          contentContainerStyle={{
            marginHorizontal: 15,
          }}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return <Image source={{uri: item}} style={styles.gridImageStyle} />;
          }}
          keyExtractor={item => item}
          numColumns={2}
          key={item => item}
        />
      </ScrollView>
    </View>
  );
};

let mapStateToProps = state => {
  return {
    home: state,
  };
};

export default connect(mapStateToProps)(Home);
