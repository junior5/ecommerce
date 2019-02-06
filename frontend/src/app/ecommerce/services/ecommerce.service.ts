import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EcommerceService {

    private URI_PRODUTO = "/produto";

    constructor(private http: HttpClient) {
    }

    listarTodosProdutos() {
        return this.http.get(this.URI_PRODUTO);
    }
}