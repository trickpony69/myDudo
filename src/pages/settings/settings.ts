import { Component } from '@angular/core';
import { IonicPage, ToastController, LoadingController } from 'ionic-angular';
import { SessionProvider } from '../../providers/session/session';
import { ProfileProvider } from '../../providers/profile/profile';
import { Clipboard } from '@ionic-native/clipboard';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  private profile = { name: "", email: "",uid:"" };

  constructor(public toastCtrl: ToastController, public loadingCtrl: LoadingController,
     public session: SessionProvider, public profileProv: ProfileProvider, private clipboard: Clipboard) {
    this.profileProv.getUserProfile().then(data => {
      data.on("value", userProfileSnapshot => {
        this.profile = userProfileSnapshot.val();
        this.profile.uid = data.key;
      });
    })
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
    this.clipboard.copy(this.profile.uid);
    this.presentToast();
  }

  showStatystics(){
    alert('Coming Soon')
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
