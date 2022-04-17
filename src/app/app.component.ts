import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = ' ';
  nameTeacher = "Artur";

  todos = ['Learn angular', 'LearnC#', 'LearnGit', 'Go to gym', 'Make a breakfast'];
  case = '';

  condition: boolean = true;

  toggle() {
    this.condition = !this.condition;
  }
  onKeyUp(event:any) {
    this.name = event.target.value;
  }
  addCase() {
    this.todos.push(this.case);
    this.case = '';
  }
  deliteCase() {
    this.todos.splice(this.todos.length - 1, 1);
  }
}
