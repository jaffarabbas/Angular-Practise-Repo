import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  list:Todo[] = [];
  constructor(public httpClient:HttpClient){}

  ngOnInit(): void {
    this.todoList()
    .pipe(
      map(todos => todos.filter(a => a.completed)),
    )
    .subscribe((data) => {
      this.list = data;
    })
  }

  todoList():Observable<Todo[]>{
    return this.httpClient.get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
  }
}
