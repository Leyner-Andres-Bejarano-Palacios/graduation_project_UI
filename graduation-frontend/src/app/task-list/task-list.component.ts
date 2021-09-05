import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks : Task[];

  constructor() { }

  ngOnInit(): void {
    this.tasks = [{
      "id":1,
      "requestId":1,
      "taskName":"tarea 1",
      "description":"primera descripcion",
      "priority":1,
      "isExecuted":1,
      "isRetried":1,
      "isFailed":1

    },
    {
      "id":2,
      "requestId":2,
      "taskName":"tarea 2",
      "description":"segunda descripcion",
      "priority":2,
      "isExecuted":1,
      "isRetried":1,
      "isFailed":1
    }];
  }

}
