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
    this.profileProv.getFriendLists().on('value', eventListSnapshot => {
      this.sharedCards = [];
      console.log('sharedCards: ', eventListSnapshot.val())
      eventListSnapshot.forEach(snap => {
        if (snap.val().title) {
          this.sharedCards.push({
            id: snap.key,
            name: snap.val().title,
            proprietaryUid: snap.val().proprietaryUid,
            path: snap.val().path,
            proprietary: 0
          });
        }
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

  addFriend(card, i) {
    var buffer;
    let mainAlert = this.alertCtrl.create();
    mainAlert.setTitle('Aggiungi amico');
    mainAlert.addButton('Annulla');
    mainAlert.addInput(
      {
        name: 'nickname',
        placeholder: 'nickname'
      })
    mainAlert.addButton({
      text: 'Aggiungi',
      handler: friend => {
        console.log('friend: ', friend.nickname);
        buffer = friend.nickname;
      }
    });
    mainAlert.present();
    mainAlert.onDidDismiss(() => {
      this.profileProv.getUidByName(buffer).then(person => {
        console.log('person: ', person)
        if (!person) { alert('il tuo amico non ha un account myDudo'); return; }
        this.profileProv.getFriendForAList(this.user.uid, card.name).once('value', snap => {
          snap.forEach(friend => {
            if (friend.val().uid == person.uid) {
              alert('questo amico è già presente nella lista');
              return;
            }

          })
        })
        this.profileProv.getPeople().once('value', people => {
          people.forEach(user => {
            console.log('entraci pls: ')
            if (user.key == person.uid) {
              let path = "/todos/" + this.user.uid + "/" + this.cards[i].name + "/";
              this.profileProv.setFriends(person.uid, this.cards[i].name, path, this.user.uid);
              alert(buffer + ' è stato aggiunto')
              return;
            }
          })
        })
      })
    })

    if (card.proprietary == 0) {
      alert("Non puoi aggiungere amici perchè la lista non è tua");
      return;
    }
    //------------------------------------

    // this.profileProv.getPeople().once('value', people => {
    //   let alert = this.alertCtrl.create();
    //   people.forEach(person => {
    //     var check = false;
    //     this.profileProv.getFriendForAList(this.user.uid, card.name).once('value', snap => {
    //       snap.forEach(friend => {
    //         if (person.key == friend.val().friendUid) check = true;
    //         else check = false;
    //       })
    //     })
    //     alert.addInput({
    //       type: 'radio',
    //       label: person.val().name,
    //       value: person.key,
    //       checked: false,
    //       disabled: check
    //     })
    //   })
    //   alert.setTitle('Persone');
    //   alert.addButton('Annulla');
    //   alert.addButton({
    //     text: 'Aggiungi',
    //     handler: friend => {
    //       let path = "/todos/" + this.user.uid + "/" + this.cards[i].name + "/";
    //       this.profileProv.setFriends(friend, this.cards[i].name, path, this.user.uid);
    //     }
    //   });
    //   alert.present()
    // });
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
          handler: () => { alert('coming soon') }
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
        this.profileProv.removeCloudList(post.owner, post.name, friend.val().friendUid);
      })
    })
  }
}
