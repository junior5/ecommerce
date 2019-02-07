import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto.model';
import { EcommerceService } from '../services/ecommerce.service';

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

	adicionarAoCarrinho(item: any) {
		this.ecommerceService.adicionarItemAoCarrinho(item)
			.toPromise()
			.then(() => {
				this.ecommerceService.atualizarCarrinho();
			}).catch((error: any) => console.error(error));
	}
}
