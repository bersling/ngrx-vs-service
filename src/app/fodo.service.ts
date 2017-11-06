import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Store} from '@ngrx/store';

@Injectable()
export class FodoService {

  constructor(
    private store: Store<any[]>
  ) {}

  removeFodo(id: number) {
    this.store.dispatch({
      type: 'REMOVE_TODO',
      id: id
    });
  }

  update(fodo) {
    // TODO;
  }


}
