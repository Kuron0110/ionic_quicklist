import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.page.html',
  styleUrls: ['./checklist.page.scss'],
})

export class ChecklistPage implements OnInit {
// array of checklists / list of checklists
   //checklists = ["run","walk","sleep","eat"];
   checklists: Todo[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(data => {
      console.log(data);
      this.checklists.push(data as Todo);
    });
  }

  addChecklist() {
    console.log('Add Checklist button clicked');
  }

  renameChecklist() {
    console.log('Rename Checklist button clicked');
  }

  removeChecklist() {
    console.log('Remove Checklist button clicked');
  }

}
