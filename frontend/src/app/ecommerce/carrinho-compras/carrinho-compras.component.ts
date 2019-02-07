import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EcommerceService } from '../services/ecommerce.service';

@Component({
	selector: 'app-carrinho-compras',
	templateUrl: './carrinho-compras.component.html',
	styleUrls: ['./carrinho-compras.component.css']
})
export class CarrinhoComprasComponent implements OnInit {

	total: number = 0;
	subscription: Subscription;

	constructor(
		private ecommerceService: EcommerceService
	) { 
		this.subscription = this.ecommerceService.visualizarCarrinho()
			.subscribe((carrinho: any) => { 
				console.log(carrinho);
				this.total = carrinho.total 
			});
	}

	ngOnInit() {
	}
}
