import { Produto } from './produto.model';

export class Item {
    produto: Produto;
    quantidade: number;
    precoVenda: number;

    constructor(produto: Produto, quantidade: number, precoVenda: number) {
        this.produto = produto;
        this.quantidade = quantidade;
        this.precoVenda = precoVenda;
    }
}