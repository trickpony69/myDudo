import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  private email;
  private password;
  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth) {
  }

  next(){
    this.navCtrl.push(TabsPage);
  }

  register(){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
      .then(res => {
        resolve(res);
        this.next();
      }, err => alert(err))
    })
   };

   login(){
     return new Promise<any>((resolve,reject) => {
       firebase.auth().signInWithEmailAndPassword(this.email,this.password)
       .then(res => {
         resolve(res);
         this.next();
       }, err => alert(err))
       })
   };
 
}
