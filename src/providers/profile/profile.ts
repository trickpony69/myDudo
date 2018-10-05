import { Injectable } from '@angular/core';
import firebase, { User } from 'firebase/app';
import 'firebase/database';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { ScrollView } from 'ionic-angular/umd/util/scroll-view';

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

  getFriendLists(): Promise<Array<any>> {
    return new Promise((resolve, reject) => {
      var ref = this.listsRef;
      var numListe;
      ref.child("sharedLists/").on("value", function (snapshot) {
        numListe = snapshot.numChildren();
      })
      ref.once("value")
        .then(function (snapshot) {
          var payload = [];
          for (let i = 0; i < numListe; i++) {
            var title = snapshot.child('sharedLists/list' + i + '/title').val();
            var path = snapshot.child('sharedLists/list' + i + '/path').val();
            payload.push({ title: title, path: path });
          }
          // console.log(payload)
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

  getPeople(): Promise<Array<any>> {
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

  getFriendForAList(list: string): Promise<Array<any>> { // ritorna gli amici di una lista, da sistemare
    return new Promise((resolve) => {
      var arr = [];
      var friendsLists = firebase.database().ref('/todos/' + this.userProfile.key + '/matteo/' + '/friends/');
      friendsLists.once('value', function (snapshot) {
        snapshot.forEach(function (child) {
          arr.push({uid: child.key,name: child.val()});
        });
      }).then(data => {
        resolve(arr);
      })      
    })
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
