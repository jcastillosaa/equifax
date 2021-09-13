import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private _http: HttpClient) { }

  listarUsuarios(){
    return this._http.get(`${environment.URL}/user/getUsers`);
  }

  crearUsuarios(usuario: any){
    return this._http.post(`${environment.URL}/user/newUser`, usuario);
  }

  eliminarUsuarios(idUser){
    return this._http.delete(`${environment.URL}/user/deleteUser/${idUser}`);
  }
}
