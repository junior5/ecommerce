package br.com.sebastiao.junior.ecommerce.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.sebastiao.junior.ecommerce.model.Produto;

public interface ProdutoRepository extends CrudRepository<Produto, Long> {

}
