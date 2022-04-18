import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent {
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
