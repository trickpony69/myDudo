import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
import { ListPage } from '../list/list';

@IonicPage()
@Component({
  selector: 'page-home-liste',
  templateUrl: 'home-liste.html',
})
export class HomeListe {

  public cards: string[] = [];
  public cardId: number[] = [];
  public cardCount: number = 0;
  toCard: {id: number, name: string};

  public actionSheet;
  public navCtrl;
  public alertCtrl;

  constructor(actionSheet: ActionSheetController, alertCtrl: AlertController, navCtrl: NavController){
    this.actionSheet = actionSheet;
    this.navCtrl = navCtrl;
    this.alertCtrl = alertCtrl;
    this.toCard = {
      id: this.cardId[0],
      name: this.cards[0]
    }
  }

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
          handler: data => { this.cards.push(data.title); 
            // todoService.user = data.title; //da pensare come fare...direi da passare tramite navParams
          }
        }
      ]
    });
    splash.present();

    this.cardCount ++;
    this.cardId[this.cardCount] = this.cardCount-1+1;
  }

  openTodo(card){
    this.navCtrl.push(ListPage, {  
      id: this.cardId[card], //come me lo passo il numero ??
      name: card
    });
  }

  action(card) {
    this.presentActionSheet(card);
  }

  presentActionSheet(card) {
    var popup =  this.actionSheet.create({
      title: 'Cosa fuori fare con questa lista ?',
      buttons: [
        {
          text: 'Elimina',
          cssClass: 'deleteButton',
          role: 'delete',
          handler: () => { this.removePost(card);}
        },{
          text: 'Annulla',
          role: 'cancel',
          handler: () => {}
        }
      ]
    });
    popup.present();
  }

  removePost(post){
    let index = this.cards.indexOf(post);
    if(index > -1){
      this.cards.splice(index, 1);
      this.cardCount--;
    }
  }

  ionViewDidLoad() {}

}
