package br.com.sebastiao.junior.ecommerce.dto;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.SessionScope;

import lombok.Getter;
import lombok.Setter;

@Component
@SessionScope
@Getter
@Setter
public class Carrinho {

	private List<Item> itens = new ArrayList<Item>();

	private Double total = 0.0;
	
	public void adicionarItem(Item item) {
	    itens.add(item);
	    total += item.getProduto().getCustoCompra() * item.getQuantidade();
	}
	
	public Integer getTotalDeItens() {
	    return itens.size();
	}
}
