import { Component } from '@angular/core';
import { SettingsPage } from '../settings/settings';
import { HomeListe } from '../home-liste/home-liste';
import { AlertController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  home;
  impostazioni = SettingsPage;
  // tab2Params = { id: HomeListe };

  constructor(alertCtrl: AlertController, navCtrl: NavController){
    let splash = alertCtrl.create({
      title: 'Nome utente',
      message: 'Inserisci il tuo nome utente',
      enableBackdropDismiss: false,
      inputs: [
        {
          placeholder: '',
          name: 'title'
        }
      ],
      buttons: [
        {
          text: 'Invia',
          handler: (data) => {
            this.home = HomeListe;
            navCtrl.push(this.home,{nickname: data.title});
          }
        }
      ]
    });
    splash.present();
  
  }
}
