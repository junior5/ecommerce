import { Component, OnInit, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { EcommerceService } from '../services/ecommerce.service';
import { Carrinho } from '../models/carrinho.model';

@Component({
	selector: 'app-carrinho-compras',
	templateUrl: './carrinho-compras.component.html',
	styleUrls: ['./carrinho-compras.component.css']
})
export class CarrinhoComprasComponent implements OnInit {

	carrinho: Carrinho = new Carrinho();
	subscription: Subscription;

	constructor(
		private ecommerceService: EcommerceService
	) { 
		this.subscription = this.ecommerceService.carrinhoComprasAtualizado()
			.subscribe((carrinho: Carrinho) => this.carrinho = carrinho);
	}

	ngOnInit() {
		this.buscarCarrinhoCompras();
	}

	buscarCarrinhoCompras() {
		this.ecommerceService.buscarCarrinhoCompras()
			.then((carrinho: Carrinho) => {
				this.carrinho = carrinho;
			}).catch((erro: any) => console.error(erro));
	}
}
