import {StyleSheet} from 'react-native';
import {PADDING} from '../../outils/constants';

const styleSettingsItem = StyleSheet.create({
  container: {
    marginTop: 15,
    backgroundColor: 'white',
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: PADDING.verticale,
    paddingHorizontal: PADDING.horizontale,
  },
});

export default styleSettingsItem;
