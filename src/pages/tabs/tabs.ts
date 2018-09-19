import { Component } from '@angular/core';
import { SettingsPage } from '../settings/settings';
import { HomeListe } from '../home-liste/home-liste';
import { AlertController, NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  home = HomeListe;
  impostazioni = SettingsPage;

  constructor(alertCtrl: AlertController, navCtrl: NavController) {
  }

}
