import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Task } from './task';
import { TaskMap } from './taskMap';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseURL = "http://localhost:8080/api/v1/tasks";

  private baseAMPURL = "http://localhost:8080/api/v1";

  constructor(private httpClient: HttpClient) { }

  getTasksList(): Observable<Task[]>{
    return this.httpClient.get<Task[]>(`${this.baseURL}`);
  }

  createTask(task: Task): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, task);
  }


  getTaskById(id: number): Observable<Task>{
    return this.httpClient.get<Task>(`${this.baseURL}/${id}`);
  }

  updateTask(id: number, task: Task): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, task);
  }

  deleteTask(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getTasksMapList(): Observable<TaskMap[]>{
    return this.httpClient.get<TaskMap[]>(`${this.baseAMPURL}/tasks-priorize-all`);
  }

}
