import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  todos = ['Learn angular', 'LearnC#', 'LearnGit', 'Go to gym', 'Make a breakfast'];
  case = '';

  addCase() {
    this.todos.push(this.case);
    this.case = '';
  }
  deleteCase() {
    this.todos.splice(this.todos.length - 1, 1);
  }
}
