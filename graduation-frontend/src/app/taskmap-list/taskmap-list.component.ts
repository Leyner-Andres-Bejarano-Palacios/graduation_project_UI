import { Component, OnInit } from '@angular/core';
import { TaskMap } from '../taskMap';
import { TaskService } from '../task.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-taskmap-list',
  templateUrl: './taskmap-list.component.html',
  styleUrls: ['./taskmap-list.component.css']
})
export class TaskmapListComponent implements OnInit {

  tasks: TaskMap[];

  constructor(private taskService: TaskService,
    private router: Router) { }

  ngOnInit(): void {
    this.getTasks();
  }

  private getTasks(){
    this.taskService.getTasksMapList().subscribe(data => {
      this.tasks = data;
    });
  }

}