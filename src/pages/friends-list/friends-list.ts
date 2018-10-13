import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SessionProvider } from '../../providers/session/session';
import { ProfileProvider } from '../../providers/profile/profile';

/**
 * Generated class for the FriendsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friends-list',
  templateUrl: 'friends-list.html',
})
export class FriendsListPage {

  private friends = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private profileProv: ProfileProvider) {
    console.log(navParams.get("proprietaryUid"),"---", navParams.get("title"))    
    profileProv.getFriendForAList(navParams.get("proprietaryUid"), navParams.get("title")).then( data => {
      data.forEach((element) =>{
        console.log(element)
        profileProv.getNameByUid(element.data).then(name =>{
          this.friends.push({name});
        })
        
      })
      console.log("friends: ",this.friends);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendsListPage');
  }

}
