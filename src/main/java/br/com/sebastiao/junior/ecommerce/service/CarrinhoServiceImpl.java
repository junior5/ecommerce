package br.com.sebastiao.junior.ecommerce.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import br.com.sebastiao.junior.ecommerce.dto.Carrinho;
import br.com.sebastiao.junior.ecommerce.dto.Item;
import br.com.sebastiao.junior.ecommerce.dto.ValoresAdicionais;
import br.com.sebastiao.junior.ecommerce.repository.ProdutoRepository;
import lombok.NonNull;

@Service
public class CarrinhoServiceImpl implements CarrinhoService {

	private final Carrinho carrinho = new Carrinho();
	private final Double despesaPadrao = 400.00;
	
	@Autowired
	private ProdutoRepository produtoRepository;
	
	@Override
	public Carrinho buscarCarrinho() {
		return carrinho;
	}

	@Override
	public void adicionarItem(@NonNull Item item) {
		produtoRepository.findById(item.getProduto().getId());
		
		Optional<Item> itemEncontrado = carrinho.getItens()
				.stream()
				.filter(e -> e.getProduto().getId().equals(item.getProduto().getId()))
				.findAny();

		if (!itemEncontrado.isPresent()) {
			carrinho.getItens().add(item);
		} else {
			Item novoItem = itemEncontrado.get();
			novoItem.setQuantidade(item.getQuantidade() + itemEncontrado.get().getQuantidade());
			carrinho.getItens().set(carrinho.getItens().indexOf(itemEncontrado.get()), novoItem);
		}
	}

	@Override
	public void atualizarPrecoVendaItens(ValoresAdicionais valoresAdicionais) {
		if (ObjectUtils.isEmpty(valoresAdicionais.getDespesasTotais())) {
			valoresAdicionais.setDespesasTotais(despesaPadrao);
		}
		
		carrinho.getItens().stream().forEach(e -> {
			Double rateio = valoresAdicionais.getDespesasTotais() / carrinho.getItens().size();
			Double precoVenda = rateio + e.getProduto().getCustoCompra();
			
			if (!ObjectUtils.isEmpty(valoresAdicionais.getMargemLucro())) {
				Double margem = 1 + (valoresAdicionais.getMargemLucro() / 100);
				precoVenda = precoVenda * margem;
			}
			
			e.setPrecoVenda(precoVenda); 
		});
		
		atualizarTotalCarrinho();
	}
	
	private void atualizarTotalCarrinho() {
		carrinho.setTotal(carrinho.getItens()
				.stream()
				.map(e -> e.getPrecoVenda() * e.getQuantidade())
				.mapToDouble(Double::doubleValue)
				.sum());
	}
}
