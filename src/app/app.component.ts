import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = ' a';
  nameTeacher = "Artur";

  todos = ['Learn angular', 'LearnC#', 'LearnGit', 'Go to gym', 'Make a breakfast'];

  condition: boolean = true;

  toggle() {
    this.condition = !this.condition;
  }
  onKeyUp(event:any) {
    this.name = event.target.value;
    return this.name[0].toUpperCase;
  }
}
