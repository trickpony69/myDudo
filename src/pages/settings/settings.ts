import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { ToDoProvider } from '../../providers/to-do/to-do';
import { HomeListe } from '../home-liste/home-liste';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  inputText: any;
  constructor(public navCtrl: NavController, public todoProv: ToDoProvider) {

  }

  ionViewDidLoad(){

    
  }

}
