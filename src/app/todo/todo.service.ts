import { Injectable } from '@angular/core'

import { Todo, createTodo } from "../models/todo.model"
import { TodosStore } from "./todo.store";
import { VISIBILITY_FILTER } from '../models/filter.model'

@Injectable({ providedIn: 'root' })
export class TodosService {

  constructor(private todosStore: TodosStore) {}

  updateFilter(filter: VISIBILITY_FILTER) {
    this.todosStore.update({
      ui: {
        filter
      }
    });
  }

  complete({ id, title, completed }: Todo) {
    this.todosStore.update(id, { completed });
  }

  add(title: string) {
    const todo = createTodo(title);
    this.todosStore.add(todo);
  }

  delete(id: string) {
    this.todosStore.remove(id);
  }
}
