import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { TodoFilter, VISIBILITY_FILTER } from "../models/filter.model";

@Component({
  selector: 'app-filters',
  template: `
    <div class="mt-7">
      <h2>Список заметок</h2>
      <form [formGroup]="filterForm" class="flex">
        <p class="mr-2">Показывать</p>
        <p-dropdown
          formControlName="selectedFilter"
          [options]="filters"
          [ngModel]="activeFilter"/>
      </form>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent implements OnInit {
  @Input() activeFilter: VISIBILITY_FILTER | null;
  @Input() filters: TodoFilter[];
  @Output() update = new EventEmitter<VISIBILITY_FILTER>();

  filterForm: FormGroup;

  constructor() {
    this.filterForm = new FormGroup({
      selectedFilter: new FormControl(this.activeFilter)
    })
  }

  ngOnInit() {
    this.filterForm.valueChanges.subscribe(form => {
      this.update.emit(form.selectedFilter);
    });
  }

}
