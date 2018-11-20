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

  removeFriend(owner, listName, uidConnectedFriend) { //elimina l'amico collegato alla lista
    firebase.database().ref('/todos/' + owner + '/' + listName + '/friends/').once('value', snap => {
      snap.forEach(el => {
        if (el.val().friendUid == uidConnectedFriend)
          firebase.database().ref('/todos/' + owner + '/' + listName + '/friends/' + el.key).remove()
      })
    })

    firebase.database().ref('/userProfile/' + uidConnectedFriend + '/sharedLists/debugNode/').once('value', snap => {
      snap.forEach(el => {
        if (el.val().title == listName) {
          firebase.database().ref('/userProfile/' + uidConnectedFriend + '/sharedLists/debugNode/' + el.key).remove()
        }
      })
    })
  }

  removeCloudList(owner, listName, uidConnectedFriend) { //elimina la lista dal db
    firebase.database().ref('/todos/' + owner + '/' + listName).remove();
    firebase.database().ref('/userProfile/' + uidConnectedFriend + '/sharedLists/debugNode/').once('value', snap => {
      snap.forEach(el => {
        if (el.val().title == listName)
          firebase.database().ref('/userProfile/' + uidConnectedFriend + '/sharedLists/debugNode/' + el.key).remove();
      })
    })
  }

  getEmail(): string {
    return this.currentUser.email;
  }

  getUserProfile(): Promise<firebase.database.Reference> {
    return new Promise((resolve) => {
      resolve(this.userProfile)
    })
  }

  getPeople(): firebase.database.Reference { //torna tutte le persone eccetto te stesso
    return firebase.database().ref('userProfile/')
  }

  getFriendForAList(owner, list): firebase.database.Reference { // ritorna una ref degli amici della lista passata     
    return firebase.database().ref('/todos/' + owner + '/' + list + '/friends/');
  }

  getNameByUid(uid): Promise<any> {
    return new Promise(resolve => {
      firebase.database().ref(('/userProfile/' + uid + '/' + '/name/')).once('value', function (snapshot) {
        resolve(snapshot.val())
      })
    })
  }

  getUidByName(name): Promise<{ name, uid }> {
    return new Promise(resolve => {
      firebase.database().ref('/userProfile/').once('value', snap => {
        var found = false;
        snap.forEach(friend => {
          if (friend.val().name == name){
            found = true;
            resolve({ name: friend.val().name, uid: friend.key })
          }
        })
        if(!found)
          resolve(null)
      })
    })
  }

  setFriends(friendId, list, path, proprietaryUid) {
    firebase.database().ref('userProfile/' + friendId + '/sharedLists/debugNode/').once('value', function (snapshot) {
      if (!snapshot.hasChild('debugNestedNode')) {
        firebase.database().ref('userProfile/' + friendId + '/sharedLists/debugNode/').set({
          debugNestedNode: 'Non togliere altrimenti non permette più il push'
        })
      }
    });

    firebase.database().ref('userProfile/' + friendId + '/sharedLists/debugNode/').push({
      title: list,
      path: path,
      proprietaryUid: proprietaryUid
    }).then(() => {
      firebase.database().ref('todos/' + this.userProfile.key + '/' + list + '/' + 'friends/').push({
        friendUid: friendId
      })
    })

  }

  updateName(firstName: string, lastName: string): Promise<any> {
    return this.userProfile.update({ firstName, lastName });
  }

}
