import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AppService {

    constructor(
        private httpClient: HttpClient
    ) {}

    public pegarUsuarios() {
        return this.httpClient.get(
            'http://localhost:4300/usuarios'
        );
    }

    public cadastrarUsuario(usuario) {
        const meuCorpoDeRequisicao = JSON.stringify(usuario);
        return this.httpClient.post(
            'http://localhost:4300/usuarios',
            meuCorpoDeRequisicao,
            {
                headers: {
                    'Content-type': 'application/json'
                }
            }
        )
    }

    public deletarUsuario(id: number) {
        return this.httpClient.delete(`http://localhost:4300/usuarios/${id}`)
    }

}