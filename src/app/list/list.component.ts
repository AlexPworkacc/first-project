import { Component, OnInit } from '@angular/core';
import { DataServise } from '../data.servise';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [DataServise]
})
export class ListComponent implements OnInit {

  todos: string[] = [];
  case = '';
  constructor(private dataServise: DataServise){}

  addCase() {
    this.dataServise.addData(this.case);
    this.case = '';
  }
  deleteCase() {
    this.dataServise.deleteData();
  }
  ngOnInit() {
    this.todos = this.dataServise.getData();
  }

}
