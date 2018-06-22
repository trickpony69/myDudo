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
  private db;

  constructor(public navCtrl: NavController, public navParams: NavParams){

  }

  setupDB(){
    
    this.db = new PouchDB('taskList');
  }

  ionViewDidLoad() {

    this.setupDB();
  }

  save(){

    this.db.post({
      fare: this.fare,
      importanza: this.importanza
    },(err, result) => {
      if(!err){
        this.navCtrl.pop();
      }
    })
  } 

  cancel(){

    this.navCtrl.pop();
  }

}
