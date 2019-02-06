import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdutosComponent } from './produtos/produtos.component';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {

  private collapsed = true;

  @ViewChild('produtosComponent')
  produtosComponent: ProdutosComponent;

  constructor() {
  }

  ngOnInit() {
  }

  toggleCollapsed(): void {
      this.collapsed = !this.collapsed;
  }
}
