import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

import { TodosService } from "../../todo/todo.service";
import { TodosQuery } from "../../todo/todo.query";
import { Todo } from "../../models/todo.model";
import { VISIBILITY_FILTER, initialFilters } from "../../models/filter.model";

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html'
})
export class TodosPageComponent implements OnInit {
  activeFilter$: Observable<VISIBILITY_FILTER>;
  todos$: Observable<Todo[]>;
  filters = initialFilters;

  todoForm : FormGroup;

  constructor(
    private todosService: TodosService,
    private todosQuery: TodosQuery
  ) {
    this.todoForm = new FormGroup({
      "todoTitle": new FormControl(),
    });
  }

  ngOnInit() {
    this.activeFilter$ = this.todosQuery.activeFilter$;
    this.todos$ = this.todosQuery.selectTodos$;
  }

  createTodo() {
    let newName: string = this.todoForm.controls['todoTitle'].value;
    this.todosService.add(newName)
  }

  changeFilter(filter: VISIBILITY_FILTER) {
    this.todosService.updateFilter(filter)
  }

  completeTodo(todo: Todo) {
    console.log(todo)
    this.todosService.complete(todo);
  }

  deleteTodo(id: string) {
    this.todosService.delete(id);
  }
}
