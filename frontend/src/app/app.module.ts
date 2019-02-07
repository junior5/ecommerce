import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ProdutosComponent } from './ecommerce/produtos/produtos.component';
import { EcommerceService } from './ecommerce/services/ecommerce.service';
import { CarrinhoComprasComponent } from './ecommerce/carrinho-compras/carrinho-compras.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EcommerceComponent,
    ProdutosComponent,
    CarrinhoComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EcommerceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
