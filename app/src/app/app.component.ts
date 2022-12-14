import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  usuarios = [];
  nomeUsuario: string;
  idadeUsuario: number;

  constructor(
    private appService: AppService
  ) {
  }

  ngOnInit(): void {
    this.pegarUsuarios();
  }

  pegarUsuarios(): void {
    this.appService.pegarUsuarios()
    .subscribe((retorno: []) => this.usuarios = retorno);
  }

  cadastrarUsuario(): void {
    const usuario = {
      nome: this.nomeUsuario,
      idade: this.idadeUsuario
    }
    this.appService.cadastrarUsuario(usuario)
    .subscribe(retorno => {
      console.log(retorno);
      this.pegarUsuarios();
    });

  }

  deletarUsuario(id: number): void {
    this.appService.deletarUsuario(id)
    .subscribe(retorno => {
      console.log(retorno);
      this.pegarUsuarios();
    });
  }

}
