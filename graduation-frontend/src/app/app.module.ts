import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateTaskComponent } from './create-task/create-task.component';
import { FormsModule} from '@angular/forms';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskmapListComponent } from './taskmap-list/taskmap-list.component';



@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    CreateTaskComponent,
    UpdateTaskComponent,
    TaskDetailComponent,
    TaskmapListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
