package br.com.sebastiao.junior.ecommerce.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.sebastiao.junior.ecommerce.exception.ValidationException;
import br.com.sebastiao.junior.ecommerce.model.Produto;
import br.com.sebastiao.junior.ecommerce.repository.ProdutoRepository;
import lombok.NonNull;

@Service
public class ProdutoServiceImpl implements ProdutoService {

	@Autowired
	private ProdutoRepository produtoRepository;
	
	@Override
	public Iterable<Produto> listarTodosProdutos() {
		return produtoRepository.findAll();
	}

	@Override
	public Produto buscarPorId(@NonNull Long id) {
		return produtoRepository.findById(id)
				.orElseThrow(() -> new ValidationException("Produto não encontrado!"));
	}
}
