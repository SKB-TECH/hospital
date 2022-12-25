import {StyleSheet} from 'react-native';
import {PADDING} from '../../outils/constants';

const styles = StyleSheet.create({
  item: {
    marginRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: PADDING.horizontale,
    paddingVertical: PADDING.verticale,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  itemImg: {
    width: 30,
    height: 30,
  },
});

export default styles;
