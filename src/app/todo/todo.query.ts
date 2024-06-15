import { Injectable } from '@angular/core';
import { TodosState, TodosStore } from './todo.store';
import { Todo } from '../models/todo.model';
import { QueryEntity } from '@datorama/akita';
import { combineLatest } from 'rxjs';
import { VISIBILITY_FILTER } from '../models/filter.model';

@Injectable({
  providedIn: 'root'
})
export class TodosQuery extends QueryEntity<TodosState> {
  activeFilter$ = this.select(state => state.ui.filter);

  selectTodos$ = combineLatest(
    this.activeFilter$,
    this.selectAll(),
    this.getVisibleTodos
  );

  constructor(protected store: TodosStore) {
    super(store);
  }

  private getVisibleTodos(filter: VISIBILITY_FILTER, todos: Todo[]): Todo[] {
      switch (filter) {
        case VISIBILITY_FILTER.SHOW_COMPLETED:
          return todos.filter(t => t.completed);
        case VISIBILITY_FILTER.SHOW_ACTIVE:
          return todos.filter(t => !t.completed);
        default:
          return todos;
      }
    }

}
