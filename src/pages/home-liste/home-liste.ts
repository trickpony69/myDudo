import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ActionSheetController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-home-liste',
  templateUrl: 'home-liste.html',
})
export class HomeListe {

  public cards = [];
  public cardCount = 0;
  nickname: string;

  constructor(private storage: Storage, public actionSheet: ActionSheetController, navParams: NavParams, public alertCtrl: AlertController, public navCtrl: NavController) {
    this.storage.get('cards').then((val) => {
      if(val != null){
        this.cards = val;
      }
    });
    this.storage.get('cardCount').then((val) => {
      if (val >= 0)
        this.cardCount = val;
    });
    this.nickname = navParams.get("nickname");
  }

  add() {
    let splash = this.alertCtrl.create({
      title: 'Lista',
      message: 'Inserisci il nome della lista che vuoi creare',
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
            this.cards.push({ id: this.cardCount, name: data.title, friend:"null", proprietary: "yes" });
            this.cardCount++;
            this.storage.set("cards", this.cards);
            this.storage.set("cardCount", this.cardCount);
          }
        }
      ]
    });
    splash.present();
  }

  addShared() {
    let splash = this.alertCtrl.create({
      title: 'Lista',
      message: 'Inserisci il nome della lista ed il nome del tuo amico',
      inputs: [
        {
          placeholder: 'nome lista',
          name: 'title'
        },
        {
          placeholder: 'nome amico',
          name: 'friend'
        },
      ],
      buttons: [
        {
          text: 'Invia',
          handler: (data) => {
            this.cards.push({ id: this.cardCount, name: data.title, friend: data.friend, proprietary: "no" });
            this.cardCount++;
            this.storage.set("cards", this.cards);
            this.storage.set("cardCount", this.cardCount);
          }
        }
      ]
    });
    splash.present();
    // alert.onDidDismiss(() => {
      
    // })
  }

  openTodo(card) {
    this.navCtrl.push(ListPage, {
      id: card.id,
      name: card.name,
      nickname: this.nickname,
      friend: card.friend,
      proprietary: card.proprietary
    }, {
        animate: true,
        animation: "ios-transition",
        direction: "backward"
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
      this.storage.set("cardCount", this.cardCount);
    }
  }

}
