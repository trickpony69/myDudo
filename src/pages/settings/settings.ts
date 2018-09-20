import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { ToDoProvider } from '../../providers/to-do/to-do';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  user = {email: "",name: ""};
  constructor(public navCtrl: NavController, public todoProv: ToDoProvider,public aFAuth: AngularFireAuth, public modalCtrl: ModalController) {
    
  }
  ionViewWillLoad() {
    this.aFAuth.authState.subscribe(data => { this.user.email = data.email; console.log(data); })
  }

}
