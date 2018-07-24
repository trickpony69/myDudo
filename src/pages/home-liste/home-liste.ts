import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-home-liste',
  templateUrl: 'home-liste.html',
})
export class HomeListe {

  public cards = [];
  public cardId: number[] = [];
  public cardCount: number = 0;
  public nickname = "cle";

  

  constructor(private storage: Storage, public actionSheet: ActionSheetController, public alertCtrl: AlertController, public navCtrl: NavController) {}

  add() {
    let splash = this.alertCtrl.create({
      title: 'Lista',
      message: 'Inserisci il nome della lista condivisa o creane una',
      inputs: [
        {
          placeholder: '',
          name: 'title'
        }
      ],
      buttons: [
        {
          text: 'Invia',
          handler: (data) => {
            this.cards.push({ id: this.cardCount, name: data.title });
            this.cardCount++;
            this.cardId[this.cardCount] = this.cardCount - 1 + 1;
            this.storage.set("cards", this.cards);
          }
        }
      ]
    });
    splash.present();
  }


  ionViewDidLoad() {
    this.storage.get('cards').then((val) => {
      this.cards = val;
    });
  }

  openTodo(card) {
    this.navCtrl.push(ListPage, {
      id: card.id,
      name: card.name,
      nickname: this.nickname
    });
  }

  action(card) {
    this.presentActionSheet(card);
  }

  presentActionSheet(card) {
    var popup = this.actionSheet.create({
      title: 'Cosa fuori fare con questa lista ?',
      buttons: [
        {
          text: 'Elimina',
          cssClass: 'deleteButton',
          role: 'delete',
          handler: () => { this.removePost(card); }
        }, {
          text: 'Annulla',
          role: 'cancel',
          handler: () => { }
        }
      ]
    });
    popup.present();
  }

  removePost(post) {
    let index = this.cards.indexOf(post);
    if (index > -1) {
      this.cards.splice(index, 1);
      this.cardCount--;
      this.storage.set("cards", this.cards);
    }
  }

}
