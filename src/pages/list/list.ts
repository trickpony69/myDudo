import { Component, Directive, ViewChildren, QueryList } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from '../../../node_modules/rxjs';
import { map } from 'rxjs/operators';
import { FriendsListPage } from '../friends-list/friends-list';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
@Directive({
  selector: '[elemento]'
})
export class ListPage {
  // @ViewChildren('elemento') elemento: QueryList<any>;
  toUser: any;
  todos; //Observable<any[]>;
  itemsRef: AngularFireList<any>;
  constructor(public afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.toUser = {
      path: navParams.get("path"),
      uid: navParams.get("uid"),
      email: navParams.get("email"),
      cardName: navParams.get("cardName"),
      nickname: navParams.get("nickname"),
      friendId: navParams.get("friend"),
      proprietary: navParams.get("proprietary"),
      proprietaryUid: navParams.get("proprietaryUid")
    }
    if (this.toUser.proprietary == "0")
      this.itemsRef = afDatabase.list(this.toUser.path);
    else
      this.itemsRef = afDatabase.list("/todos/" + this.toUser.uid + "/" + this.toUser.cardName);

    //-----------------------------Tornato a questa funzione e a non quella subito sotto---------------------
    this.todos = this.itemsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val()}))
      ))

    //  this.itemsRef.valueChanges().subscribe(item => this.todos = item); 
  }

  createTodo() {

    let prompt = this.alertCtrl.create({
      title: 'Aggiungi',
      message: 'Cosa dovrai fare di bello oggi?',
      inputs: [
        {
          placeholder: 'task',
          name: 'title'
        }
      ],
      buttons: [
        {
          text: 'Annulla'
        },
        {
          text: 'Invia',
          handler: data => {
            this.itemsRef.push({ content: data.title, status: 0 }) //status 0 è normale, 1 è sottolineata
          }
        }
      ]
    });

    prompt.present();

  }

  updateTodo(todo) {

    let prompt = this.alertCtrl.create({
      title: 'Cambiato idea ?',
      inputs: [
        {
          name: 'title',
          value: todo.content,
        }
      ],
      buttons: [
        {
          text: 'Annulla'
        },
        {
          text: 'Modifica',
          handler: (data) => {
            this.itemsRef.update(todo.key, { content: data.title });
          }
        }
      ]
    });

    prompt.present();
  }

  deleteTodo(key: string) {
    this.itemsRef.remove(key);
  }

  checkUncheck(todo, i) {
    console.log(todo)
    if (todo.status == 0) this.itemsRef.update(todo.key, { status: 1 });
    else this.itemsRef.update(todo.key, { status: 0 });
  };

  viewListFriends(){
    var proprietaryUid = this.toUser.proprietaryUid;
    if(!proprietaryUid)
      proprietaryUid = this.toUser.uid;
    this.navCtrl.push(FriendsListPage,{
      title: this.toUser.cardName,
      proprietaryUid: proprietaryUid,
      proprietary: this.navParams.get('proprietary')
    })
  }

}
