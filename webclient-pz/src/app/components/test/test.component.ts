import { Component } from '@angular/core';
import { Model, TodoItem } from './../../model';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss'],
})

export class TestComponent {
    model = new Model();

    getName(){
      return this.model.user;
    }
  
    getToDoItems() {
      return this.model.items.filter(item => !item.done);
    }
  
    addItem(newItem: string){
      if (newItem != ""){
        this.model.items.push(new TodoItem(newItem, false));
      }
    }
}