import {StyleSheet} from 'react-native';
import {PADDING} from '../../outils/constants';

const styles = StyleSheet.create({
  scrollableListItem: {
    paddingHorizontal: PADDING.horizontale,
    paddingVertical: PADDING.verticale,
    backgroundColor: 'white',
    marginRight: 15,
    elevation: 5,
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subText: {
    marginTop: 10,
    fontSize: 14,
  },
});

export default styles;
