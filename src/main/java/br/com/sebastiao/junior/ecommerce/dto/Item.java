package br.com.sebastiao.junior.ecommerce.dto;

import br.com.sebastiao.junior.ecommerce.model.Produto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Item {

	private Produto produto;
	  
	private Integer quantidade;
}
