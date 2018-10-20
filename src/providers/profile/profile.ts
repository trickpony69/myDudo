import { Injectable } from '@angular/core';
import firebase, { User } from 'firebase/app';
import 'firebase/database';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ScrollView } from 'ionic-angular/umd/util/scroll-view';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ProfileProvider {

  public userProfile: firebase.database.Reference;
  public currentUser: User;
  public listsRef;
  public lists;
  private payload;
  public friendListRef: firebase.database.Reference;


  constructor(private afDatabase: AngularFireDatabase) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.currentUser = user;
        this.userProfile = firebase.database().ref(`/userProfile/${user.uid}`);
        this.listsRef = firebase.database().ref('/userProfile/' + user.uid);
        this.friendListRef = firebase
        .database()
        .ref(`/userProfile/${user.uid}/sharedLists`);
      }
    });
  }

  getFriendLists(): firebase.database.Reference { //ritorna una ref delle liste condivise con te
      return this.friendListRef;
  }

  getSharedLists(uid){ //ritorna una ref delle liste dell'uid passato
    return firebase.database().ref(`/userProfile/${uid}/sharedLists`);
  }

  createListRef(uid,listKey){ //ritorna una ref che hai condiviso con l'uid dell'utente
    return firebase.database().ref(`/userProfile/${uid}/sharedLists/${listKey}`);
  }

  getEmail(): string {
    return this.currentUser.email;
  }

  getUserProfile(): Promise<firebase.database.Reference> {
    return new Promise((resolve) => {
      resolve(this.userProfile)
    })
  }

  getPeople(): Promise<Array<any>> {
    return new Promise((resolve, reject) => {
      var currentUser = this.userProfile;
      var friends = firebase.database().ref('userProfile/');
      friends.on('value', getData);
      function getData(data) {
        var obj = [];
        data.forEach(element => {
          if (currentUser.key != element.key)
            obj.push({ key: element.key, payload: element.val() });
        });
        resolve(obj)
      }
    });
  }

  getFriendForAList(owner, list): Promise<Array<any>> { // ritorna gli amici della tua lista, da sistemare
    return new Promise((resolve) => {
      var arr = [];
      var friendsLists = firebase.database().ref('/todos/' + owner + '/' + list + '/friends/');
      friendsLists.once('value', function (snapshot) {
        snapshot.forEach(function (child) {
          arr.push({ ref: friendsLists, data: child.val().friendUid });
        });
      }).then(() => {
        resolve(arr);
      })
    })
  }

  getNameByUid(uid): Promise<any> {
    return new Promise(resolve => {

      firebase.database().ref(('/userProfile/' + uid + '/' + '/name/'))
        .once('value', function (snapshot) {
          resolve(snapshot.val())
        })
    })
  }

  setFriends(friendId, list, i, path, proprietaryUid) {
    firebase.database().ref('userProfile/' + friendId + '/sharedLists').push({
      title: list,
      path: path,
      proprietaryUid: proprietaryUid
    });
    firebase.database().ref('todos/' + this.userProfile.key + '/' + list + '/' + 'friends/').push({
      friendUid: friendId
    })
  }

  updateName(firstName: string, lastName: string): Promise<any> {
    return this.userProfile.update({ firstName, lastName });
  }

}
