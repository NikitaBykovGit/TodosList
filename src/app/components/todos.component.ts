import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../models/todo.model'

@Component({
  selector: 'app-todos',
  template: `
    <div class="mt-6 h-20rem">
      <app-todo
        *ngFor="let todo of todos"
        [todo]="todo"
        (delete)="delete.emit($event)"
        (complete)="complete.emit($event)">
      </app-todo>
    </div>
  `
})

export class TodosComponent {
  @Input() todos: Todo[] | null;
  @Output() complete = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<string>();
}
