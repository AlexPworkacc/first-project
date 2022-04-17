import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = ' ';
  nameTeacher = "Artur";

  condition: boolean = true;

  toggle() {
    this.condition = !this.condition;
  }
  onKeyUp(event:any) {
    this.name = event.target.value;
  }
}
