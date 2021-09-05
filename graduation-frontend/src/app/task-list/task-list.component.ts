import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks : Task[];

  constructor(private taskService: TaskService,
    private router: Router) { }

    ngOnInit(): void {
      this.getTasks();
    }

    private getTasks(){
      this.taskService.getTaskList().subscribe(data => {
        this.tasks = data;
      });
    }

}
