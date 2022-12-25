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
    marginTop: 10,
    paddingHorizontal: PADDING.horizontale,
    paddingVertical: PADDING.verticale,
  },
  doctorImg: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 15,
  },
  doctorCard: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 10,
    elevation: 5,
    margin: 10,
    padding: 5,
    paddingHorizontal: PADDING.horizontale,
    paddingVertical: PADDING.verticale,
    borderRadius: 8,
  },
  doctorInfo: {
    flexDirection: 'column',
  },
  doctorName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 15,
  },
  doctorSpe: {
    backgroundColor: COLORS.main,
    padding: 5,
    color: 'white',
    paddingHorizontal: PADDING.horizontale,
    borderRadius: 15,
    fontSize: 14,
  },
});

export default dashBoard;
