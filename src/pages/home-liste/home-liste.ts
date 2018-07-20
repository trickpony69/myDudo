import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
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
  public actionSheetCtrl;
  public actionSheet;
  public navCtrl: NavController;

  constructor(todo: ToDoProvider, alert: AlertController, actionSheetCtrl: ActionSheetController, navCtrl: NavController, public navParams: NavParams) {
    this.todo = todo;
    this.alert = alert;
    this.actionSheetCtrl = actionSheetCtrl;
    this.navCtrl = navCtrl;
  }

  add() {
    var oggetto = new HomePage(this.alert, this.todo);
    this.numListe = this.liste.push(oggetto);
  }

  openList() {
    this.navCtrl.push('oggetto');
  }

  action() {
    this.presentActionSheet();
  }

  presentActionSheet() {
    this.actionSheet = this.actionSheetCtrl.create({
      title: 'Cosa fuori fare con questa lista ?',
      buttons: [
        {
          text: 'Elimina',
          cssClass: 'deleteButton',
          role: 'delete',
          handler: (data) => { this.liste.splice(data,1);
          }
        },{
          text: 'Annulla',
          role: 'cancel',
          handler: () => {}
        }
      ]
    });
    this.actionSheet.present();
  }

  ionViewDidLoad() {

  }

}
