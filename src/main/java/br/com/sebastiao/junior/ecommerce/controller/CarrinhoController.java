package br.com.sebastiao.junior.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.sebastiao.junior.ecommerce.dto.Carrinho;
import br.com.sebastiao.junior.ecommerce.dto.Item;
import br.com.sebastiao.junior.ecommerce.dto.ValoresAdicionais;
import br.com.sebastiao.junior.ecommerce.service.CarrinhoService;

@RestController
@RequestMapping("/carrinho")
public class CarrinhoController {

	@Autowired
	private CarrinhoService carrinhoService;
	
	@PostMapping
	public void adicionarItem(@RequestBody Item item) {
		carrinhoService.adicionarItem(item);
	}

	@PostMapping("/atualizarPrecoVendaItens")
	public void atualizarPrecoVendaItens(@RequestBody ValoresAdicionais valoresAdicionais) {
		carrinhoService.atualizarPrecoVendaItens(valoresAdicionais);
	}
	
	@GetMapping
	public Carrinho visualizarCarrinho() {
		return carrinhoService.buscarCarrinho();
	}
}
