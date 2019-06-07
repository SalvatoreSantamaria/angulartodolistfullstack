import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json' // takes in object with whatever heads we want to send (application/json in this case)
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=15';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo> { // type is Observable
  return this.http.get<Todo>('/pts');




  // original code
  // getTodos(): Observable<Todo[]> { // type is Observable
  // return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
     // Get Todos from JSON placeholder
  // using the template literals to replace https://jsonplaceholder.typicode.com/todos?_limit=5

    // dummy placeholder
    // return [
    //   {
    //     id: 1,
    //     title: 'Todo One',
    //     completed: false
    //   },
    //   {
    //     id: 2,
    //     title: 'Todo Two',
    //     completed: true
    //   },
    //   {
    //     id: 3,
    //     title: 'Todo Three',
    //     completed: false
    //   }
    // ];
  }

  // Delete Todo from the server
  deleteTodo(id: Todo): Observable<Todo> {

    // original code
    // const url = `${this.todosUrl}/${todo.id}`; // deleting a specific todo
    // console.log(url);
    // return this.http.delete<Todo>(url, httpOptions);
    // end of original code

    // console.log(id);
    const url = '/pts/' + id;
    // console.log(url);
    return this.http.delete<Todo>('/pts/' + id);

  }

  // Add Todo to server
  addTodo(todo: Todo): Observable<Todo> {
    // return this.http.post<Todo>(this.todosUrl, todo, httpOptions); // original code
    return this.http.post<Todo>('/pts', todo);
  }

  // Toggle Completed
  toggleCompleted(todo: Todo): Observable<any> { // takes in todo (type is Todo), and returns observable
    const url = `${this.todosUrl}/${todo.id}`; // updating a specific todo
    return this.http.put(url, todo, httpOptions); // passing in url, todo, and httpOptions
  }
}

