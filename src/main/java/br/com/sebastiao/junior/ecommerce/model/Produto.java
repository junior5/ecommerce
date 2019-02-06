package br.com.sebastiao.junior.ecommerce.model;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Produto {

	@Id
    private Long id;

    @NotNull(message = "O nome do produto é obrigatório")
    @Basic(optional = false)
    @Max(50)
    private String nome;

    @Max(200)
    private String descricao;
    
    private Double custoCompra;

    private String urlImagem;
}
