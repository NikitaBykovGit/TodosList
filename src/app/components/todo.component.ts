import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Todo } from '../models/todo.model'

@Component({
  selector: 'app-todo',
  template: `
    <div class="flex w-25rem h-3rem border-solid border-gray-200 border-1 mt-3
      align-items-center">
      <form class="flex w-3rem h-3rem border-solid border-gray-200 border-1
        surface-ground justify-content-center" [formGroup]="completeForm">
        <p-checkbox
          [binary]="true"
          inputId="binary"
          formControlName="competeControl" />
      </form>
      <div class="flex justify-content-between w-full align-items-center">
        <p class="ml-3">{{ todo.title }}</p>
        <button
          class="w-3rem h-3rem bg-red-500 border-none"
          (click)="delete.emit(todo.id)">
            <i class="pi pi-times" style="font-size: 1.5rem"></i>
        </button>
      </div>
    </div>
  `
})
export class TodoComponent  implements OnInit {
  @Input() todo: Todo;
  @Output() complete = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<string>();

  completeForm: FormGroup;

  ngOnInit() {

    this.completeForm = new FormGroup({
      competeControl: new FormControl(this.todo.completed)
    })

    this.completeForm.valueChanges.subscribe((form) => {
      let completed: boolean = form.competeControl
      this.complete.emit({ ...this.todo, completed })
    });
  }
}
