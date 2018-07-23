import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ToDoProvider } from '../../providers/to-do/to-do';


@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  todos;
  toUser;
  nomeLista;
  idLista;
  constructor(public navCtrl: NavController, public navParams: NavParams, public todoService: ToDoProvider, public alertCtrl: AlertController) {
    this.doRefresh(0);
    this.toUser = {
      id: navParams.get("id"),
      name: navParams.get("name")
    }
    this.nomeLista = this.toUser.name;
    this.idLista = this.toUser.id;
    // this.splash.onDidDismiss(() => {

    //   todoService.remote = todoService.link + todoService.user;
    //   todoService.db.sync(todoService.remote, todoService.options);
    //   // alert(todoService.remote);
    //   this.nomeLista = todoService.user;
    // });
  }


  ionViewDidLoad() {
    this.todoService.getTodo().then((data) => {
      this.todos = data;
    });

  }

  doRefresh(refresher) {
    this.todoService.getTodo().then((data) => {
      this.todos = data;
      if (refresher != 0)
        refresher.complete();
    });
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
            this.todoService.createTodo({ title: data.title });
          }
        }
      ]
    });

    prompt.present();

  }

  updateTodo(todo) {

    let prompt = this.alertCtrl.create({
      title: 'Edit',
      message: 'Cambiato idea ?',
      inputs: [
        {
          name: 'title'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.todoService.updateTodo({
              _id: todo._id,
              _rev: todo._rev,
              title: data.title
            });
          }
        }
      ]
    });

    prompt.present();
  }

  deleteTodo(todo) {
    this.todoService.deleteTodo(todo);
  }

}
