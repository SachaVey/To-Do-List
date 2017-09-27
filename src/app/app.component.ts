import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listItem: string;
  list: Array<any>;
  completedList: Array<any>;
  constructor() {
    this.list = [
      {item: 'Sample Item', completed: false}
    ]
    this.completedList = [
      {item: 'Sample Completed', completed: true }
    ]
  }
  action(listType, itemId) {
    if(listType === 'list') {
      this.completedList.push(this.list[itemId]);
      this.list.splice(itemId, 1);
    } else if (listType === 'completedList') {
      this.list.push(this.completedList[itemId]);
      this.completedList.splice(itemId, 1);
    }
  }
  removeItem(listType, itemId) {
    if(listType === 'list')
      this.list.splice(itemId, 1);
    else
      this.completedList.splice(itemId, 1);
  }
  addListItem() {
    if(this.listItem)
      this.list.push( {item: this.listItem, completed: false} );
    this.listItem = undefined;
  }
}
