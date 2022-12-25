import {StyleSheet} from 'react-native';
import {COLORS, PADDING} from '../../outils/constants';

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
  title_space_between: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: PADDING.horizontale,
    paddingVertical: PADDING.verticale,
  },
  link: {
    color: COLORS.main,
  },
  doctorContainer: {
    paddingHorizontal: PADDING.horizontale,
    paddingVertical: PADDING.verticale,
  },
  doctorCard: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 20,
    elevation: 5,
    paddingHorizontal: PADDING.horizontale,
    paddingVertical: PADDING.verticale,
    padding: 10,
    borderRadius: 15,
    
  },
});

export default dashBoard;
