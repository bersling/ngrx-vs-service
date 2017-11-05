import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


const INITIAL_TODOS = Array(100).fill('').map((_, i) => {
  return {
    id: i,
    title: `Todo `
  };
});

@Injectable()
export class TodoService {

  todos = new BehaviorSubject<any[]>(INITIAL_TODOS);

  constructor(
    private http: HttpClient
  ) { }

  getTodos() {
    return this.todos;
  }

  removeTodo(id: number) {
    console.log (id, this.todos.getValue());
    const newTodos = this.todos.getValue().filter(todo => todo.id !== id);
    console.log(newTodos, 'new todos');
    this.todos.next(newTodos);
    console.log('new get value', this.getTodos().getValue());
  }

  update(todo) {
    console.log('updating', todo);
    const newTodos = this.getTodos().getValue();
    newTodos[todo.id] = todo;
    this.todos.next(newTodos);
  }


}
