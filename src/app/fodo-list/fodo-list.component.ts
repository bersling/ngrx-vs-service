import {Component, Input, OnInit} from '@angular/core';
import {FodoService} from '../fodo.service';
import {Store} from '@ngrx/store';
import {REMOVE_TODO, UPDATE_TODO} from '../fodo.reducer';

@Component({
  selector: 'app-fodo-list',
  templateUrl: './fodo-list.component.html',
  styleUrls: ['./fodo-list.component.css']
})
export class FodoListComponent implements OnInit {

  fodos;

  constructor(
    private fodoService: FodoService,
    private store: Store<{todos: any}>
  ) { }

  ngOnInit() {
    this.store.subscribe(newState => {
      const newFodos = newState.todos;
      this.fodos = Object.keys(newFodos).map(key => newFodos[key]);
    });
  }

  doRemove(id: number) {
    this.store.dispatch({
      type: REMOVE_TODO,
      id: id
    });
  }

  doUpdate(fodo) {
    this.store.dispatch({
      type: UPDATE_TODO,
      fodo: fodo
    });
  }

}
