import {StyleSheet} from 'react-native';
import {PADDING} from '../../outils/constants';

const styleSetting = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: PADDING.horizontale,
    paddingVertical: PADDING.verticale,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 5,
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  userInfo: {
    marginLeft: 15,
  },
  userName: {
    fontWeight: 'bold',
    marginBottom: 1,
  },

  userMail: {
    marginBottom: 1,
  },
});

export default styleSetting;
