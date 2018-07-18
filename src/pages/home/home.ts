import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { ToDoProvider } from '../../providers/to-do/to-do';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  nomeLista: any;
  todos: any;
  splash;
  constructor(public alertCtrl: AlertController, public todoService: ToDoProvider) {
    this.doRefresh(0);

    this.splash = this.alertCtrl.create({
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
          handler: data => {
            todoService.user = data.title;
          }
        }
      ]
    });
    this.splash.present();

    this.splash.onDidDismiss(() => {

      todoService.remote = todoService.link + todoService.user;
      todoService.db.sync(todoService.remote, todoService.options);
      // alert(todoService.remote);
      this.nomeLista = todoService.user;
    });
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



 // ionViewDidEnter(){

  //   this.refresh();
  // }

  // refresh(){

  //   // this.localdb = new PouchDB('taskList'); non mi serve più
  //   this.remotedb = new PouchDB('http://localhost:5984/mydudo');
  //   this.tasks = [];

  //   this.remotedb.allDocs({include_docs: true},(err,result) =>{
  //     if(!err){
  //       let rows = result.rows;
  //       for(let i = 0; i<rows.length; i++){
  //         this.tasks.push(rows[i].doc);
  //       }
  //     }
  //   })
  // }

  // delete(task){
  //   this.remotedb.remove(task,(err,result) => {
  //     if(!err){
  //       alert("task eliminato");
  //       this.refresh();
  //     }
  //     else {alert("ciè problema")}
  //   })
  // }