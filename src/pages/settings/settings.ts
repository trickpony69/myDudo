import { Component } from '@angular/core';
import { IonicPage, ToastController, LoadingController } from 'ionic-angular';
import { ToDoProvider } from '../../providers/to-do/to-do';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { SessionProvider } from '../../providers/session/session';
import { Observable } from '../../../node_modules/rxjs'
import { ProfileProvider } from '../../providers/profile/profile';
import { Clipboard } from '@ionic-native/clipboard';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  user = { email: "", uid: "" };
  constructor(public toastCtrl: ToastController, public loadingCtrl: LoadingController, public session: SessionProvider, public profileProv: ProfileProvider, private clipboard: Clipboard) {

  }
  ionViewWillEnter() {
    // non ho capito come funzioni
    //  var profilex;
    //  this.profileProv.getUserProfile().on("value", userProfileSnapshot => {
    //  profilex = userProfileSnapshot.val();
    //  });
    //  console.log(profilex);
    var profile1 = this.profileProv.getUserProfile();
    this.user = { email: this.profileProv.getEmail(), uid: profile1.key };
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Id amico copiato negli appunti',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      // console.log('Dismissed toast'); // penso se fare qualcosa dopo il toast
    });

    toast.present();
  }

  copy() {
    this.clipboard.copy(this.user.uid);
    this.presentToast();
  }

  logout() {
    var loading;
    loading = this.loadingCtrl.create({
      content: `<img src="assets/imgs/loader.svg"/>`,
      spinner: 'hide'
    });
    loading.present();
    this.session.logoutUser().then(() => { loading.dismiss().then(() => { window.location.reload() }) });
  }

}
