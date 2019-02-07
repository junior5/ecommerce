import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class EcommerceService {

    private URI_PRODUTO = "/produto";
    private URI_CARRINHO = "/carrinho";

    private subject = new Subject<any>();
    private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}

    constructor(private http: HttpClient) {
    }

    listarTodosProdutos() {
        return this.http.get(this.URI_PRODUTO);
    }

    adicionarItemAoCarrinho(item: any) {
        return this.http.post(this.URI_CARRINHO, JSON.stringify(item), this.httpOptions);
    }

    atualizarCarrinho() {
        return this.http.get(this.URI_CARRINHO)
            .toPromise()
            .then((carrinho: any) => {
                this.subject.next(carrinho);
            });
    }

    visualizarCarrinho() {
        return this.subject.asObservable();
    }
}