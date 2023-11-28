import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowTasksComponent } from './components/show-tasks/show-tasks.component';
import { CreateTasksComponent } from './components/create-tasks/create-tasks.component';
import { UpdateTasksComponent } from './components/update-tasks/update-tasks.component';

const routes: Routes = [
  { path: 'tasks', component: ShowTasksComponent },
  { path: 'add', component: CreateTasksComponent },
  { path: 'detail/:id', component: UpdateTasksComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
