import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Carrinho } from '../models/carrinho.model';
import { Subject, Observable } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable()
export class EcommerceService {

    private URI_PRODUTO = "/produto";
    private URI_CARRINHO = "/carrinho";

    private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
    private subject = new Subject<any>();
    public despesasTotais: number;
    public margemLucro: number;

    constructor(
        private http: HttpClient
    ) { }

    listarTodosProdutos() {
        return this.http.get(this.URI_PRODUTO);
    }

    adicionarItemAoCarrinhoCompras(item: Item) {
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

    adicionarDespesasMargemLucro(despesasTotais: number, margemLucro: number) {
        this.despesasTotais = despesasTotais;
        this.margemLucro = margemLucro;
    }

    atualizarPrecoVendaItens(): Promise<any> {
        return this.http.post(
            this.URI_CARRINHO + "/atualizarPrecoVendaItens",
            JSON.stringify({
                despesasTotais: this.despesasTotais,
                margemLucro: this.margemLucro
            }),
            this.httpOptions
        ).toPromise();
    }
}