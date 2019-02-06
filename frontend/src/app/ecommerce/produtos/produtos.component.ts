import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto.model';
import { EcommerceService } from '../services/ecommerce.service';

@Component({
	selector: 'app-produtos',
	templateUrl: './produtos.component.html',
	styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

	produtos: Produto[] = [];

	constructor(
		private ecommerceService: EcommerceService
	) { }

	ngOnInit() {
		this.limparProdutos();
		this.listarTodosProdutos();
	}

	limparProdutos() {
		this.produtos = [];
	}

	listarTodosProdutos() {
		this.ecommerceService.listarTodosProdutos()
			.subscribe((produtos: any[]) => {
				this.produtos = produtos;
			}, (error) => console.error(error));
	}
}
