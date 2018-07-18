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
  constructor(public todo: ToDoProvider, public alert: AlertController, public navCtrl: NavController, public navParams: NavParams) {

    var oggetto = new HomePage(alert, todo);
    var oggetto1 = new HomePage(alert, todo);

    this.numListe =this.liste.push(oggetto,oggetto1);
  }

  add(){
    console.log(this.liste[0].nomeLista);
    console.log(this.liste[1].nomeLista);
  }

  ionViewDidLoad() {

  }

}
