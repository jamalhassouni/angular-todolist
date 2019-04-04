import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../models/Todo";

const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {
   todosUrl:string = "https://jsonplaceholder.typicode.com/todos";
    todosLimit = "?_limit=10";

  constructor(private http:HttpClient) { }

// Get Todos
  getTodos():Observable<Todo[]>{
   return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }
  //Toggle Completed
  toggelCompleted(todo:Todo):Observable<any>{
    const url = `${this.todosUrl}/${todo.id}`;

   return this.http.put(url,todo,httpOptions);
  }

  // Delete Todo

  deleteTodo(todo:Todo):Observable<Todo>{
    const url = `${this.todosUrl}/${todo.id}`;

    return this.http.delete<Todo>(url,httpOptions);
  }

  // add Todo

  addTodo(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>(this.todosUrl,todo,httpOptions);
  }

}
