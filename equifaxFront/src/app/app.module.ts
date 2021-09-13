import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListarUsuariosComponent } from './pages/listar-usuarios/listar-usuarios.component';
import { CrearUsuarioComponent } from './pages/crear-usuario/crear-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListarUsuariosComponent,
    CrearUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
