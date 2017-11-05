import {Component, Input, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(newTodos => {
      this.todos = Object.keys(newTodos).map(key => newTodos[key]);
    });
  }

  doRemove(id: number) {
    this.todoService.removeTodo(id);
  }

  doUpdate(todo) {
    this.todoService.update(todo);
  }

}
