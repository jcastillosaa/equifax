import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  usuarios : any[];

  constructor(private _usuarioService: UsuarioService ) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  public cargarUsuarios(){
    this._usuarioService.listarUsuarios().subscribe( (data:any) => {
      this.usuarios = data;
    });
  }

  async eliminarUsuario(id){
    console.log("usuario a eliminar es", id);
    this._usuarioService.eliminarUsuarios(id).subscribe( (data:any) => {
      console.log("data", data);
      if(data.__v === 0){
        this.cargarUsuarios();
      }
    });
  }

}
