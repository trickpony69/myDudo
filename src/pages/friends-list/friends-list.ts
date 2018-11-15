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
  constructor(public navCtrl: NavController, public navParams: NavParams, private profileProv: ProfileProvider) {
    this.friends.push({ name: 'Tu', friendUid: 'null' })
    profileProv.getFriendForAList(navParams.get("proprietaryUid"), navParams.get("title")).on('value', snap => {
      snap.forEach(el => {
        profileProv.getNameByUid(el.val().friendUid).then(name => {
          this.friends.push({ name: name, friendUid: el.val().friendUid })
        })
      })
    })
  }

  removeFriend(friend) {
    this.profileProv.removeFriend(this.navParams.get('proprietaryUid'), this.navParams.get('title'), friend.friendUid)
    let index = this.friends.indexOf(friend);
    if (index > -1) {
      this.friends.splice(index, 1);
    }
  }
}