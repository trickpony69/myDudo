import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ActionSheetController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { Storage } from '@ionic/storage';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { SessionProvider } from '../../providers/session/session';
import { ProfileProvider } from '../../providers/profile/profile';

@IonicPage()
@Component({
  selector: 'page-home-liste',
  templateUrl: 'home-liste.html',
})
export class HomeListe {

  public cards = [];
  public sharedCards = [];
  public cardCount = 0;
  nickname;
  user = { email: "", uid: "" };
  immagine = "src=\"./../assets/imgs/sfondo0.jpg\"";

  constructor(private storage: Storage, public actionSheet: ActionSheetController, public alertCtrl: AlertController, public navCtrl: NavController, public profileProv: ProfileProvider) {

    this.storage.get('cards').then((val) => {
      if (val != null) {
        console.log(val)
        this.cards.push(val[0]);
      }
    });
    this.storage.get('cardCount').then((val) => {
      if (val >= 0)
        this.cardCount = val;
    });

  }

  ionViewWillEnter() {
    this.user = { email: "", uid: this.profileProv.getUserProfile().key };
    this.profileProv.getFriendLists().then(data => {
      
      console.log(data)
      var trovato = false;
      data.forEach((element0) => {
        this.sharedCards.forEach((local, index) => {
          console.log(element0.path);
          console.log(local.path)
          if (element0.path == local.path) {
            trovato = true;
          }
        });
        if (!trovato) {
          this.sharedCards.push({ id: '0', name: element0.title, friends: "null", proprietary: 0, path: element0.path });
          this.cardCount++;
        }
      })
    }
    );
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
          text: 'Crea',
          handler: (data) => {
            this.cards.push({ id: this.cardCount, name: data.title, friends: "null", proprietary: 1, path: data.cardPath });
            this.cardCount++;
            this.storage.set("cards", this.cards);
            this.storage.set("cardCount", this.cardCount);
          }
        }
      ]
    });
    splash.present();
  }

  addFriend(i) {
    var friends = this.profileProv.getFriends().then((data) => {
      let alert = this.alertCtrl.create();
      data.forEach((element, index) => {
        alert.addInput({
          type: 'radio',
          label: element,
          value: element,
          checked: false
        })
      })
      alert.setTitle('Amici');
      alert.addButton('Annulla');
      alert.addButton({
        text: 'Aggiungi',
        handler: data => {
          let path = "/todos/" + this.user.uid + "/" + this.cards[i].name + "/";
          this.profileProv.setFriends(data, this.cards[i].name, i, path);
        }
      });
      alert.present()
    });
  }

  openTodo(card) {
    this.navCtrl.push(ListPage, {
      path: card.path,
      uid: this.user.uid,
      email: this.user.email,
      id: card.id,
      cardName: card.name,
      friend: card.friend,
      proprietary: card.proprietary
    }, {
        animate: true,
        animation: "ios-transition",
        direction: "backward"
      });
  }

  action(card, index) {
    this.presentActionSheet(card, index);
  }

  presentActionSheet(card, index) {
    var popup = this.actionSheet.create({
      title: 'Cosa vuoi fare con questa lista ?',
      buttons: [
        {
          text: "Aggiungi amico",
          handler: () => { this.addFriend(index) }
        }, {
          text: "modifica",
          handler: () => { this.choseImage(index) }
        }, {
          text: 'Annulla',
          role: 'cancel',
          handler: () => { }
        }, {
          text: 'Elimina',
          cssClass: 'deleteButton',
          role: 'delete',
          handler: () => { this.removePost(card); }
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

  //-----------REFACTORING------------
  addShared() { // Da togliere
    let splash = this.alertCtrl.create({
      title: 'Lista',
      message: 'Inserisci il nome della lista ed il nome del tuo amico',
      inputs: [
        {
          placeholder: 'nome lista',
          name: 'title'
        },
        {
          placeholder: 'id amico',
          name: 'friendId'
        },
      ],
      buttons: [
        {
          text: 'Aggiungi',
          handler: (data) => {
            this.cards.push({ id: this.cardCount, name: data.title, friend: data.friendId, proprietary: 0 });
            this.cardCount++;
            this.storage.set("cards", this.cards);
            this.storage.set("cardCount", this.cardCount);
          }
        }
      ]
    });
    splash.present();
    // alert.onDidDismiss(() => {})
  }

  choseImage(index) { // Da cambiare
    let splash = this.alertCtrl.create({
      title: 'Sfondo',
      message: 'Inserisci il nome della lista ed il nome del tuo amico',
      inputs: [
        {
          type: 'radio',
          name: 'image',
          label: 'nessuno',
          value: 'nessuno',
        }, {
          type: 'radio',
          name: 'image',
          label: 'sfondo 0',
          value: 'sfondo0',
        }, {
          type: 'radio',
          name: 'image',
          label: 'sfondo 1',
          value: 'sfondo1',
        }, {
          type: 'radio',
          name: 'image',
          label: 'sfondo 2',
          value: 'sfondo2',
        }, {
          type: 'radio',
          name: 'image',
          label: 'ombrellone',
          value: 'ombrellone',
        }, {
          type: 'radio',
          name: 'image',
          label: 'spiaggia',
          value: 'spiaggia',
        }, {
          type: 'radio',
          name: 'image',
          label: 'carrello della spesa',
          value: 'shopping',
        }
      ],
      buttons: [
        {
          text: 'Cambia',
          handler: (data) => {
            var listeCards = document.getElementsByTagName("img");
            if (data == "nessuno") { listeCards[index].style.display = "none"; }
            else {
              listeCards[index].style.background = "url('./../assets/imgs/" + data + ".jpg')";
              listeCards[index].style.display = "block";
            }
          }
        }
      ]
    });
    splash.present();
  }

}
