import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';

@IonicPage()
@Component({
  selector: 'page-friends-list',
  templateUrl: 'friends-list.html',
})
export class FriendsListPage {

  private friends = [];
  public proprietaryUid = this.navParams.get("proprietaryUid");
  public isMine =  this.navParams.get("proprietary");
  public proprietaryName;
  constructor(public navCtrl: NavController, public navParams: NavParams, private profileProv: ProfileProvider) {
    console.log('isMine: ',this.isMine)
    this.profileProv.getNameByUid(this.proprietaryUid).then(name => {
      this.friends.push({ name: name, friendUid: this.proprietaryUid, proprietary: 1})
    })
    profileProv.getFriendForAList(this.proprietaryUid, navParams.get("title")).on('value', snap => {
      snap.forEach(el => {
        profileProv.getNameByUid(el.val().friendUid).then(name => {
          this.friends.push({ name: name, friendUid: el.val().friendUid, proprietary: 0})
        })
      })
    })
  }

  removeFriend(friend) {
    this.profileProv.removeFriend(this.proprietaryUid, this.navParams.get('title'), friend.friendUid)
    let index = this.friends.indexOf(friend);
    if (index > -1) {
      this.friends.splice(index, 1);
    }
  }
}