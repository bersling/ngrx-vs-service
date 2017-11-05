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
    this.todos = this.todoService.getTodos().getValue();
    this.todoService.getTodos().subscribe(newTodos => {
      this.todos = newTodos;
    });
  }

  doRemove(id: number) {
    this.todoService.removeTodo(id);
  }

  doUpdate(todo) {
    this.todoService.update(todo);
  }

}
