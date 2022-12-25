import {StyleSheet} from 'react-native';
import {PADDING, COLORS} from '../../outils/constants';

const styleChat = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    elevation: 5,
    backgroundColor: 'white',
    paddingHorizontal: PADDING.horizontale,
    paddingVertical: PADDING.verticale,
  },
  messageImg: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 15,
  },
  messageInfo: {
    flexDirection: 'column',
    flex: 1,
    paddingVertical: PADDING.verticale,
  },

  data_name: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
    marginRight: 5,
  },
});

export default styleChat;
