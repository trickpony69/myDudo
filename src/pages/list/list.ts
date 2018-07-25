import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from '../../../node_modules/rxjs';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  toUser: any;
  todos: Observable<any[]>;
  itemsRef: AngularFireList<any>;

  constructor(public afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.toUser = {
      name: navParams.get("name"),
      nickname: navParams.get("nickname"),
      friend: navParams.get("friend"),
      proprietary: navParams.get("proprietary")
    }
    if (this.toUser.proprietary == "yes")
      this.itemsRef = afDatabase.list("/todos/" + this.toUser.nickname + "/" + this.toUser.name + "/");
    
    else
      this.itemsRef = afDatabase.list("/todos/" + this.toUser.friend + "/" + this.toUser.name + "/");
    
    this.todos = this.itemsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
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
          text: 'Salva',
          handler: data => {
            this.itemsRef.push({ content: data.title })
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

}
