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
  private db;
  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidEnter(){

    this.refresh();

  }

  refresh(){
    
    this.db = new PouchDB('taskList')
    this.tasks = [];

    this.db.allDocs({include_docs: true},(err,result) =>{
      if(!err){
        let rows = result.rows;
        for(let i = 0; i<rows.length; i++){
          this.tasks.push(rows[i].doc);
        }
      }
    })
  }

  delete(task){
    this.db.remove(task,(err,result) => {
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

