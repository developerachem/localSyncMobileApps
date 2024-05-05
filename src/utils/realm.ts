// Define your object model

import {useQuery} from '@realm/react';
import Realm, {BSON, ObjectSchema} from 'realm';

export class Profile extends Realm.Object<Profile> {
  _id!: BSON.ObjectId;
  name!: string;

  static schema: ObjectSchema = {
    name: 'Profile',
    properties: {
      _id: 'objectId',
      name: {type: 'string', indexed: 'full-text'},
    },
    primaryKey: '_id',
  };
}

export const Read = () => {
  // Find
  const profiles = useQuery(Profile);
  // Sort
  const sortedProfiles = useQuery(Profile, profiles => {
    return profiles.sorted('name', false);
  });
  // Filter
  const filteredProfiles = useQuery(Profile, profiles => {
    return profiles.filtered('name == "testProfile"');
  });
};
