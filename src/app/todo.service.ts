import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

const INITIAL_TODOS = {};
(() => {
  for (let i = 0; i < 100; i++) {
    INITIAL_TODOS[i] = {
      title: `Todo`,
      id: i
    };
  }
})();


@Injectable()
export class TodoService {

  todos = new BehaviorSubject<{[id: number]: any}>(INITIAL_TODOS);

  constructor(
    private http: HttpClient
  ) { }

  getTodos() {
    return this.todos;
  }

  removeTodo(id: number) {
    const newTodos = this.todos.getValue();
    delete newTodos[id];
    this.todos.next(newTodos);
  }

  update(todo) {
    const newTodos = this.getTodos().getValue();
    newTodos[todo.id] = todo;
    this.todos.next(newTodos);
  }


}
