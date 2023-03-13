import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { RegistroComponent } from './clientes/registro.component';



const routes: Routes = [
  {  path:'', pathMatch:'full', redirectTo:'login' },
    {path: 'login', component: LoginComponent},
    {path: 'clientes', component: ClientesComponent},
    {path: 'home', component: HomeComponent},
    {path: 'clientes/registro', component: RegistroComponent}
    
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }