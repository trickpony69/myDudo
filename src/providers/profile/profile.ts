import { Injectable } from '@angular/core';
import firebase, { User } from 'firebase/app';
import 'firebase/database';
import { Observable } from 'rxjs';

@Injectable()
export class ProfileProvider {

  public userProfile: firebase.database.Reference;
  public currentUser: User;
  public listsRef;
  public lists;

  constructor() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.currentUser = user;
        this.userProfile = firebase.database().ref(`/userProfile/${user.uid}`);
        this.listsRef = firebase.database().ref('/userProfile/' + user.uid);
      }
    });
  }

  getLists(): any {
    return new Promise((resolve, reject) => {
      var ref = this.listsRef;
      ref.once("value")
        .then(function (snapshot) {
          var CardTitle = snapshot.child('sharedLists/list0/title').val();
          var CardPath = snapshot.child('sharedLists/list0/path').val();
          var payload = { cardTitle: CardTitle, cardPath: CardPath };
          resolve(payload);
        });
    })
  }

  getEmail(): string {
    return this.currentUser.email;
  }

  getUserProfile(): firebase.database.Reference {
    return this.userProfile;
  }

  getFriends(): Promise<Array<any>> {
    return new Promise((resolve, reject) => {
      var friends = firebase.database().ref('userProfile/');
      friends.on('value', getData);
      function getData(data) {
        var obj = data.val();
        var keys = Object.keys(obj);
        console.log(keys);
        resolve(keys);
      }
    });
  }

  setFriends(userId, list, i, path) {
    firebase.database().ref('userProfile/' + userId + '/sharedLists' + '/list' + i).update({
      n: i,
      title: list,
      path: path
    });
  }

  updateName(firstName: string, lastName: string): Promise<any> {
    return this.userProfile.update({ firstName, lastName });
  }

}
