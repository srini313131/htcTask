import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { LoginComponent } from './components/login/login.component';
import { ContainerComponent } from './containers/container/container.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'employees', component: ContainerComponent},
  {path: '', redirectTo: '/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
