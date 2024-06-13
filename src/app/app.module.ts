import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';

import { AppComponent } from './app.component';
import { TodosPageComponent } from './components/todos-page/todos-page.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoComponent } from './components/todo/todo.component';
import { FiltersComponent } from './components/filters/filters.component';

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
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
