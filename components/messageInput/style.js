import {StyleSheet} from 'react-native';
import {COLORS, PADDING} from '../../outils/constants';

const styleInput = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    marginRight: 5,
  },
  send: {
    backgroundColor: COLORS.main,
    paddingHorizontal: PADDING.horizontale,
    paddingVertical: PADDING.verticale,
    alignItems: 'center',
    color: 'white',
  },
});

export default styleInput;
