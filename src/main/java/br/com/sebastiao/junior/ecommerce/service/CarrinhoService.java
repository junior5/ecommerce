package br.com.sebastiao.junior.ecommerce.service;

import br.com.sebastiao.junior.ecommerce.dto.Carrinho;
import br.com.sebastiao.junior.ecommerce.dto.Item;
import br.com.sebastiao.junior.ecommerce.dto.ValoresAdicionais;
import lombok.NonNull;

public interface CarrinhoService {

	void adicionarItem(@NonNull Item item);
	
	void atualizarPrecoVendaItens(ValoresAdicionais valoresAdicionais); 
	
	Carrinho buscarCarrinho();
}
