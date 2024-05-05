import {useQuery, useRealm} from '@realm/react';
import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {BSON} from 'realm';
import {Profile} from '../utils/realm';

const Home = () => {
  const profiles = useQuery(Profile);

  console.log('profiles ==>', profiles);

  const realm = useRealm();
  const [profileName, setProfileName] = useState('');
  const addProfile = () => {
    realm.write(() => {
      realm.create(Profile, {
        _id: new BSON.ObjectId(),
        name: profileName,
      });
    });
  };

  return (
    <View>
      <View>
        <Text>Create</Text>
        <TextInput
          onChangeText={setProfileName}
          value={profileName}
          placeholder="Profile name..."
        />
        <Button title="Add Profile" onPress={addProfile} />
      </View>
    </View>
  );
};

export default Home;
