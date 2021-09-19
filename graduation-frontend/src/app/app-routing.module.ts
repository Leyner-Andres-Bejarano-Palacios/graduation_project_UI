import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskmapListComponent } from './taskmap-list/taskmap-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

const routes: Routes = [
  {path: 'tasks', component: TaskListComponent },
  {path: 'tasksmap', component: TaskmapListComponent },
  {path: 'create-task', component: CreateTaskComponent },
  {path: '', redirectTo: 'tasks', pathMatch: 'full'},
  {path: 'update-task/:id', component: UpdateTaskComponent},
  {path: 'task-details/:id', component: TaskDetailComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})


export class AppRoutingModule { }
