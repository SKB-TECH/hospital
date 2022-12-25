import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import React from 'react';
import dashBoard from './Style.js';
import {FakeActivity} from '../../fakesData/fakeActivity.js';
import Symptome from '../../components/symptomes/index.js';
import ActivityItems from '../../components/activity/index.js';
import {fakeSymptome} from '../../fakesData/fakeSymptomes.js';
import {listDoctor} from '../../fakesData/fakeDocteur';
import SymptomeItem from '../../components/symptomes/index.js';

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
          return <ActivityItems item={item} />;
        }}
      />
      {/* List of symptomes */}
      <View style={dashBoard.title}>
        <Text style={dashBoard.titleBold}> Quel symptome avez vous ?</Text>
      </View>
      <FlatList
        horizontal={true}
        keyExtractor={item => item.id}
        data={fakeSymptome}
        showsHorizontalScrollIndicator={false}
        style={dashBoard.scrollableListe}
        renderItem={({item}) => {
          return <SymptomeItem item={item} />;
        }}
      />
      {/* Fin symptome list */}
      <View style={dashBoard.title_space_between}>
        <Text style={dashBoard.titleBold}> Nos docteurs</Text>
        <TouchableOpacity>
          <Text style={dashBoard.link}> Afficher Tout</Text>
        </TouchableOpacity>
      </View>
      <View>
        {listDoctor.splice(0, 3).map(doctor => {
          return (
            <TouchableOpacity key={doctor.id} style={dashBoard.doctorCard}>
              <Image
                source={{uri: `${doctor.img}`}}
                style={dashBoard.doctorImg}
              />
              <View style={dashBoard.doctorInfo}>
                <Text style={dashBoard.doctorName}>{doctor.fullname}</Text>
                <Text style={dashBoard.doctorSpe}>{doctor.speciality}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Home;
