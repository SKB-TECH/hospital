import {StyleSheet} from 'react-native';
import {PADDING} from '../../outils/constants';

const dashBoard = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: PADDING.horizontale,
    paddingVertical: PADDING.verticale,
    backgroundColor: 'white',
  },

  userImg: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },

  userName: {
    fontSize: 16,
  },

  //stylisation du flatList
  scrollableListe: {
    paddingHorizontal: PADDING.horizontale,
    paddingVertical: PADDING.verticale,
  },

  title: {
    paddingHorizontal: PADDING.horizontale,
    paddingVertical: PADDING.verticale,
  },
  titleBold: {
    fontWeight: 'bold',
  },
});

export default dashBoard;
