import { Injectable } from '@angular/core';
import firebase, { User } from 'firebase/app';
// import 'firebase/database';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ScrollView } from 'ionic-angular/umd/util/scroll-view';

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
          .ref(`/userProfile/${user.uid}/sharedLists/debugNode`);
      }
    });
  }

  getFriendLists(): firebase.database.Reference { //ritorna una ref delle liste condivise con te
    return this.friendListRef;
  }

  getSharedLists(uid) { //ritorna una ref delle liste dell'uid passato
    return firebase.database().ref(`/userProfile/${uid}/sharedLists/debugNode`);
  }

  removeCloudList(owner,listName,uidConnectedFriend, listKeyConnected) { //elimina la lista dal db
    firebase.database().ref('/todos/' + owner + '/' + listName + '/friends/').remove()
    firebase.database().ref('/userProfile/' + uidConnectedFriend + '/sharedLists/debugNode/' + listKeyConnected + '/').remove()
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

  getFriendForAList(owner, list): firebase.database.Reference { // ritorna gli amici della tua lista, da sistemare      
      return firebase.database().ref('/todos/' + owner + '/' + list + '/friends/');  
  }

  getNameByUid(uid): Promise<any> {
    return new Promise(resolve => {

      firebase.database().ref(('/userProfile/' + uid + '/' + '/name/'))
        .once('value', function (snapshot) {
          resolve(snapshot.val())
        })
    })
  }

  setFriends(friendId, list, path, proprietaryUid) {
    console.log("riferimento", 'userProfile/' + friendId + '/sharedLists/')
    firebase.database().ref('userProfile/' + friendId + '/sharedLists/debugNode/').push({
      title: list,
      path: path,
      proprietaryUid: proprietaryUid
    }).then(() => {
      console.error();
      firebase.database().ref('todos/' + this.userProfile.key + '/' + list + '/' + 'friends/').push({
        friendUid: friendId
      })
    })

  }

  updateName(firstName: string, lastName: string): Promise<any> {
    return this.userProfile.update({ firstName, lastName });
  }

}
