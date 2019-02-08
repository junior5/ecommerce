import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto.model';
import { EcommerceService } from '../services/ecommerce.service';
import { Item } from '../models/item.model';

@Component({
	selector: 'app-produtos',
	templateUrl: './produtos.component.html',
	styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

	itens:  Array<{ produto: Produto,  quantidade: number }> = [];
	
	constructor(
		private ecommerceService: EcommerceService
	) { }

	ngOnInit() {
		this.limparProdutos();
		this.listarTodosProdutos();
	}

	limparProdutos() {
		this.itens = [];
	}

	listarTodosProdutos() {
		this.ecommerceService.listarTodosProdutos()
			.toPromise()
			.then((produtos: any[]) => {
				produtos.forEach((_produto: Produto) => {
					this.itens.push({ produto: _produto, quantidade: 0 })
				});
			}).catch((error: any) => console.error(error));
	}

	adicionarAoCarrinho(item: Item) {
		if (item.quantidade > 0) {
			this.ecommerceService.adicionarItemAoCarrinhoCompras(item)
				.toPromise()
				.then(() => {
					this.ecommerceService.produtoSelecionado();
				}).catch((error: any) => console.error(error));
		}
	}
} 
