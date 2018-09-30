import { Injectable } from '@angular/core';
import firebase, { User } from 'firebase/app';
import 'firebase/database';

@Injectable()
export class ProfileProvider {

  public userProfile: firebase.database.Reference;
  public currentUser: User;

  constructor() {
    console.log('Hello ProfileProvider Provider');

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.currentUser = user;
        this.userProfile = firebase.database().ref(`/userProfile/${user.uid}`);
      }
    });
  }

  getEmail(): string {
    return this.currentUser.email;
  }

  getUserProfile(): firebase.database.Reference {
    return this.userProfile;
  }

  getFriends() {
    return new Promise((resolve, reject) => {
      var friends = firebase.database().ref('userProfile/');
      friends.on('value', getData);
      function getData(data) {
        let obj = data.val();
        console.log(obj);
        resolve(obj);
      }
    });

  }

  updateName(firstName: string, lastName: string): Promise<any> {
    return this.userProfile.update({ firstName, lastName });
  }

}
