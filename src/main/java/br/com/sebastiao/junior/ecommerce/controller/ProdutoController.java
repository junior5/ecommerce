package br.com.sebastiao.junior.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.sebastiao.junior.ecommerce.model.Produto;
import br.com.sebastiao.junior.ecommerce.service.ProdutoService;

@RestController
@RequestMapping("/produto")
public class ProdutoController {

	@Autowired
	private ProdutoService produtoService;
	
	@GetMapping({"", "/"})
	public Iterable<Produto> listarTodosProdutos() {
		return produtoService.listarTodosProdutos();
	}
	
	@GetMapping("/{id}")
	public Produto buscarPorId(@PathVariable("id") Long id) {
		return produtoService.buscarPorId(id);
	}
}
