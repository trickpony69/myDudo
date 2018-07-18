import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ToDoProvider } from '../../providers/to-do/to-do';

/**
 * Generated class for the HomeListePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-liste',
  templateUrl: 'home-liste.html',
})
export class HomeListe {

  public liste: any = [];
  public numListe;
  public todo;
  public alert;
  constructor(todo:ToDoProvider,alert:AlertController, public navCtrl: NavController, public navParams: NavParams) {
    this.todo = todo; 
    this.alert = alert;
  }

  add() {
    var oggetto = new HomePage(this.alert, this.todo);
    this.numListe = this.liste.push(oggetto);
  }

  ionViewDidLoad() {

  }

}
