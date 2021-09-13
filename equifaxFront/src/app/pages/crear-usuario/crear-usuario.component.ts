import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  public formUsuario: FormGroup;

  constructor(private _usuarioService: UsuarioService,
              private fb: FormBuilder,
              private _router:Router
              ) {

    this.formUsuario = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.min(1)]),
      name : new FormControl('', [Validators.required, Validators.min(1)]),
      edad : new FormControl('', [Validators.required, Validators.min(1)])
    });
    
  }

  ngOnInit(): void {
  }

  crearUsuario(){
    this._usuarioService.crearUsuarios(this.formUsuario.value).subscribe( (user:any) => {
      console.log("resultado:", user);
      if(user._id){
        this._router.navigate(['list-user']);
      }
    })
  }

}
