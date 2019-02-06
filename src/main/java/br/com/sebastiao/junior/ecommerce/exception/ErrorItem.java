package br.com.sebastiao.junior.ecommerce.exception;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ErrorItem {

    @JsonInclude(JsonInclude.Include.NON_NULL) 
    private String code;
    
    private String message;
}