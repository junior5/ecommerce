package br.com.sebastiao.junior.ecommerce.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.sebastiao.junior.ecommerce.dto.Carrinho;
import br.com.sebastiao.junior.ecommerce.dto.Item;

@RestController
@RequestMapping("/carrinho")
public class CarrinhoController {

	private final Carrinho carrinho = new Carrinho();
	
	@PostMapping
	public void adicionarItem(@RequestBody Item item) {
		carrinho.adicionarItem(item);
	}
	
	@GetMapping
	public Carrinho visualizarCarrinho() {
		return carrinho;
	}
	
	@GetMapping("/total")
	public Double buscaValorTotal() {
		return carrinho.getTotal();
	}
}
