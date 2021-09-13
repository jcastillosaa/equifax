import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './pages/crear-usuario/crear-usuario.component';
import { ListarUsuariosComponent } from './pages/listar-usuarios/listar-usuarios.component';

const routes: Routes = [
  {path: 'list-user', component: ListarUsuariosComponent },
  {path: 'new-user', component: CrearUsuarioComponent },
  {path: '', pathMatch: 'full', redirectTo: 'list-user'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
