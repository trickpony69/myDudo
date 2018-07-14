import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { ToDoProvider } from '../../providers/to-do/to-do';

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

    this.inputText = this.todoProv.user;
  }

  loadData(){
    alert(this.todoProv.remote);
  }
}
