import {View, Text, ScrollView, Image, FlatList} from 'react-native';
import React from 'react';
import dashBoard from './Style.js';
import {FakeActivity} from '../../fakesData/fakeActivity.js';

const Home = () => {
  return (
    <ScrollView>
      {/* header part */}
      <View style={dashBoard.header}>
        <Text style={dashBoard.userName}> Therese Odiko </Text>
        <Image
          source={require('../../assets/profile.jpg')}
          style={dashBoard.userImg}
        />
      </View>

      {/* part of tasks list */}
      <FlatList
        horizontal={true}
        keyExtractor={item => item.id}
        data={FakeActivity}
        showsHorizontalScrollIndicator={false}
        style={dashBoard.scrollableListe}
        renderItem={({item}) => {
          return (
            <View style={dashBoard.scrollableListItem}>
              <Text>{item.mainText}</Text>
            </View>
          );
        }}
      />
    </ScrollView>
  );
};

export default Home;
