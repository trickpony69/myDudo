import { Component } from '@angular/core';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';
import { NavController, NavParams, Platform, Events } from 'ionic-angular/umd';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  home = HomePage;
  impostazioni = SettingsPage;

  constructor(){
  }
}
