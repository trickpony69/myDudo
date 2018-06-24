import { Injectable } from '@angular/core';
import PouchDB from 'PouchDb'

/*
  Generated class for the ToDoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToDoProvider {

  data: any;
  db: any;
  remote: any;

  constructor() {

    this.db = new PouchDB('myDudo');
    this.remote = 'https://52287c68.ngrok.io/mydudo';
    // https://52287c68.ngrok.io/mydudo
    let options = {
      live: true,
      retry: true,
      continuous: true
    };

    this.db.sync(this.remote, options);
  }

  getTodo() {

    if (this.data) {

      return Promise.resolve(this.data);
    }

    return new Promise((resolve) => {

      this.db.allDocs({
        include_docs: true
      }).then((result) => {
        this.data = [];
        let docs = result.rows.map((row) => {
          this.data.push(row.doc);
        });
        resolve(this.data);
        this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', (change) => {
          this.handleChange(change);
        });

      }).catch((error) => {
        console.log('ciè problema con database ( getTodo() )');
      });

    });
  }

  handleChange(change){

    let changedDoc = null;
    let changedIndex = null;

    this.data.forEach((doc,index) => {
      
      if(doc._id === change.id){
        changedDoc = doc;
        changedIndex = index;
      }

    });

    //Un documento è stato eliminato
    if(change.deleted){
      this.data.splice(changedIndex,1);
    }
    else{//il documento è stato aggiornato

      if(changedDoc){
        this.data[changedIndex] = change.doc;
      }
      else{//un documento è stato aggiunto (non ho il suo id quindi è nuovo)
        this.data.push(change.doc);
      }
    }
  }

  createTodo(todo){
    
    this.db.post(todo)
  }

  updateTodo(todo){

    this.db.put(todo).catch((err) => {
      console.log(err);
    });
  }

  deleteTodo(todo){

    this.db.remove(todo).catch((err) =>{
      console.log(err);
    });
  }
}
