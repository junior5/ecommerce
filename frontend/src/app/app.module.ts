import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ProdutosComponent } from './ecommerce/produtos/produtos.component';
import { EcommerceService } from './ecommerce/services/ecommerce.service';

@NgModule({
  declarations: [
    AppComponent,
    EcommerceComponent,
    ProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EcommerceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
