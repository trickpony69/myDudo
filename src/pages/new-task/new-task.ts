import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import PouchDB from 'pouchdb';
/**
 * Generated class for the NewTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-task',
  templateUrl: 'new-task.html',
})
export class NewTaskPage{

  private fare;
  private importanza;
  // private localdb;
  private remotedb

  constructor(public navCtrl: NavController, public navParams: NavParams){

  }

  setupDB(){
    
    // this.localdb = new PouchDB('taskList'); non mi serve più
    this.remotedb = new PouchDB('https://a4bb63c0.ngrok.io/mydudo');
  }

  ionViewDidLoad() {

    this.setupDB();
  }

  save(){

    this.remotedb.post({
      fare: this.fare,
      importanza: this.importanza
    },(err, result) => {
      if(!err){
        this.navCtrl.pop();
      }
      else alert("ciè problema col database")
    })
  } 

  cancel(){

    this.navCtrl.pop();
  }

}
