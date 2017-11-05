import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo;
  @Output() remove = new EventEmitter();
  @Output() update = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  triggerRemove() {
    this.remove.emit(this.todo.id);
  }

  triggerUpdate() {
    const updatedTodo = Object.assign({}, this.todo, {title: 'Tralala'});
    this.update.emit(updatedTodo);
  }

}
