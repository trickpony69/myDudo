import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewTaskPage } from '../new-task/new-task';
import PouchDB from 'pouchdb';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  
  private tasks;
  // private localdb;
  private remotedb;
  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidEnter(){

    this.refresh();
  }

  refresh(){
    
    // this.localdb = new PouchDB('taskList'); non mi serve più
    this.remotedb = new PouchDB('http://localhost:5984/mydudo');
    this.tasks = [];

    this.remotedb.allDocs({include_docs: true},(err,result) =>{
      if(!err){
        let rows = result.rows;
        for(let i = 0; i<rows.length; i++){
          this.tasks.push(rows[i].doc);
        }
      }
    })
  }

  delete(task){
    this.remotedb.remove(task,(err,result) => {
      if(!err){
        alert("task eliminato");
        this.refresh();
      }
      else {alert("ciè problema")}
    })
  }

  createNew(){

    this.navCtrl.push(NewTaskPage);
 
  }

}

