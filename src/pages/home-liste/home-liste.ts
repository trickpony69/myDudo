import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ActionSheetController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { Storage } from '@ionic/storage';
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
      // Object.values(myObject).length forse funziona anche questa
      var counterCards = function (obj) {
        var size = 0, key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) size++;
        }
        return size;
      };
      for (let i = 0; i < counterCards(val); i++) {
        profileProv.getUserProfile().then((data) => {
          if (val != null && val[i].owner == data.key) {
            this.cards.push(val[i]);
          }
        })

      }
    });
    this.storage.get('cardCount').then((val) => {
      if (val >= 0)
        this.cardCount = val;
    });

  }

  ionViewDidLoad() {

    this.user = { email: "", uid: "" };
    this.profileProv.getUserProfile().then(data => this.user.uid = data.key)
    this.profileProv.getFriendLists().on("value", eventListSnapshot => {
      this.sharedCards = [];
      eventListSnapshot.forEach(snap => {
        this.sharedCards.push({
          id: snap.key,
          name: snap.val().title,
          proprietaryUid: snap.val().proprietaryUid,
          path: snap.val().path,
          proprietary: 0
        });
      })
    })
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
            this.cards.push({ owner: this.user.uid, id: this.cardCount, name: data.title, friends: "null", proprietary: 1, path: data.cardPath });
            this.cardCount++;
            this.storage.set("cards", this.cards);
            this.storage.set("cardCount", this.cardCount);
          }
        }
      ]
    });
    splash.present();
  }

  checkAlreadyAdded(list, friendKey): Promise<boolean> {
    return new Promise((resolve) => {
      this.profileProv.getFriendForAList(this.user.uid, list).once('value', snap => {
        snap.forEach(el => {
          if (friendKey == el.val().friendUid)
            resolve(true);
        })
        resolve(false);
      })
    })
  }

  addFriend(card, i) {
    if (card.proprietary == 0) {
      alert("Non puoi aggiungere amici perchè la lista non è tua");
      return;
    }
    this.profileProv.getPeople().then((people) => {
      let alert = this.alertCtrl.create();
      people.forEach((person, index) => {
        this.checkAlreadyAdded(card.name, person.key).then(condition => {
          alert.addInput({
            type: 'radio',
            label: person.payload.name,
            value: person.key,
            checked: false,
            disabled: condition
          })
        })
      })
      alert.setTitle('Persone');
      alert.addButton('Annulla');
      alert.addButton({
        text: 'Aggiungi',
        handler: friend => {
          let path = "/todos/" + this.user.uid + "/" + this.cards[i].name + "/";
          this.profileProv.setFriends(friend, this.cards[i].name, path, this.user.uid);
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
      proprietary: card.proprietary,
      proprietaryUid: card.proprietaryUid
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
          handler: () => { this.addFriend(card, index) }
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
    if (post.proprietary == 0) {
      alert("Non puoi eliminare una lista non tua")
      return
    }
    let index = this.cards.indexOf(post);
    if (index > -1) {
      this.cards.splice(index, 1);
      this.cardCount--;
      this.storage.set("cards", this.cards);
      this.storage.set("cardCount", this.cardCount);
    }
    this.profileProv.getFriendForAList(this.user.uid, post.name).once('value', friends => {
      friends.forEach(friend => {
        this.profileProv.getSharedLists(friend.val().friendUid).once('value', lists => {
          lists.forEach(list => {
            if(list.val().path ){
              this.profileProv.removeCloudList(post.owner,post.name,friend.val().friendUid, list.key);
            }
          })
        })
      })
    })
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
