import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdutosComponent } from './produtos/produtos.component';
import { CarrinhoComprasComponent } from './carrinho-compras/carrinho-compras.component';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {

  private collapsed = true;

  @ViewChild('produtosComponent')
  produtosComponent: ProdutosComponent;

  @ViewChild('carrinhoComponent')
  carrinhoComponent: CarrinhoComprasComponent;

  constructor() {
  }

  ngOnInit() {
  }

  toggleCollapsed(): void {
      this.collapsed = !this.collapsed;
  }
}
