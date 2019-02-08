import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Carrinho } from '../models/carrinho.model';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class EcommerceService {

    private URI_PRODUTO = "/produto";
    private URI_CARRINHO = "/carrinho";

    private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
    private subject = new Subject<any>();

    constructor(
        private http: HttpClient
    ) { }

    listarTodosProdutos() {
        return this.http.get(this.URI_PRODUTO);
    }

    adicionarItemAoCarrinhoCompras(item: any) {
        return this.http.post(this.URI_CARRINHO, JSON.stringify(item), this.httpOptions);
    }

    buscarCarrinhoCompras() {
        return this.http.get(this.URI_CARRINHO)
            .toPromise()
            .then((carrinho: Carrinho) => {
                return Promise.resolve(carrinho);
            });
    }

    carrinhoComprasAtualizado(): Observable<any> {
        return this.subject.asObservable();
    }

    produtoSelecionado() {
        this.buscarCarrinhoCompras()
            .then((carrinho: Carrinho) => {
                this.subject.next(carrinho);
            });
    }
}