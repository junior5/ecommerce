import { Item } from './item.model';

export class Carrinho {
    itens: Item [];
    total: number;

    constructor() {
        this.itens = [];
        this.total = 0;
    }
}