import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { ToDoProvider } from '../../providers/to-do/to-do';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  user = {uid: "",email: "",name: ""};
  constructor(public navCtrl: NavController, public todoProv: ToDoProvider,public aFAuth: AngularFireAuth, public modalCtrl: ModalController) {
    
  }
  ionViewWillLoad() {
    this.aFAuth.authState.subscribe(data => {this.user.uid = data.uid; this.user.email = data.email; console.log(data); })
  }

  logout(){
    firebase.auth().signOut().then(function() {
      console.log("signed out");
      this.navCtrl.push(LoginPage);
    })
  }

}
