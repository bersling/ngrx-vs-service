import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {HttpClientModule} from '@angular/common/http';
import {TodoService} from './todo.service';
import {StoreModule} from '@ngrx/store';

import {Action} from 'rxjs/scheduler/Action';
import {FodoListComponent} from './fodo-list/fodo-list.component';
import {FodoService} from './fodo.service';
import {fodosReducer} from './fodo.reducer';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    FodoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ todos: fodosReducer })
  ],
  providers: [
    TodoService,
    FodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
