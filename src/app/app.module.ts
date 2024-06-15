import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AutoCompleteModule } from "primeng/autocomplete";
import { InputTextModule } from "primeng/inputtext";
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';

import { AppComponent } from './app.component';
import { TodosPageComponent } from './components/todos-page/todos-page.component';
import { TodosComponent } from './components/todos.component';
import { TodoComponent } from './components/todo.component';
import { FiltersComponent } from './components/filters.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosPageComponent,
    TodosComponent,
    TodoComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    ButtonModule,
    AutoCompleteModule,
    DropdownModule,
    CheckboxModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
