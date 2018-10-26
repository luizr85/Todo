import { NgModule } from '@angular/core';

import { TodoRoutingModule } from './todo-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { TodoComponent } from './todo.component';

@NgModule({
  imports: [
    TodoRoutingModule,
    SharedModule
  ],
  declarations: [TodoComponent]
})
export class TodoModule { }
