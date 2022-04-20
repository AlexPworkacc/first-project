import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { HelloComponent } from './hello/hello.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
    { path: 'Hello', component: HelloComponent},
    { path: 'Todos', component: ListComponent},
    { path: 'Hello', redirectTo: '/Hello', pathMatch:'full'},
    { path: 'Todos', redirectTo: '/Todos', pathMatch:'full'},
    { path: 'Forms', component: FormsComponent},
    { path: 'Forms', redirectTo: '/Forms', pathMatch: 'full'},
    { path: '**', redirectTo: '/'}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
