import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  promotionDot: {
    backgroundColor: 'grey',
    width: 6,
    height: 6,
    borderRadius: 3,
    marginLeft: 4,
    marginRight: 4,
  },
  activeDot: {
    backgroundColor: 'black',
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 5,
  },
  centerText: {justifyContent: 'center', alignItems: 'center'},
  parentview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  carouselImageStyle: {width: Dimensions.get('window').width - 50, height: 200},
  gridImageStyle: {
    width: 150,
    height: 150,
    marginHorizontal: 10,
    marginVertical: 10,
  },
});

export default styles;
