package br.com.sebastiao.junior.ecommerce.service;

import br.com.sebastiao.junior.ecommerce.model.Produto;
import lombok.NonNull;

public interface ProdutoService {

	Iterable<Produto> listarTodosProdutos();
	
	Produto buscarPorId(@NonNull Long id);
}
