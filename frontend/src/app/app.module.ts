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
import { LOCALE_ID, } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { NgxMaskModule } from 'ngx-mask';

registerLocaleData(localePt, 'pt-BR');

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
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [EcommerceService, { provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
