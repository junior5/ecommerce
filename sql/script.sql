DROP TABLE PRODUTO;

CREATE TABLE PUBLIC.PRODUTO (
	ID INTEGER NOT NULL PRIMARY KEY,
	NOME VARCHAR(20) NOT NULL,
	DESCRICAO VARCHAR(200),
	CUSTO_COMPRA DECIMAL,
	URL_IMAGEM VARCHAR(200)
);

INSERT INTO PRODUTO(ID, NOME, DESCRICAO, CUSTO_COMPRA, URL_IMAGEM) VALUES (1, 'Produto A', 'Descricao produto A', 100.00, 'http://webresizer.com/images2/bird1_after.jpg');
INSERT INTO PRODUTO(ID, NOME, DESCRICAO, CUSTO_COMPRA, URL_IMAGEM) VALUES (2, 'Produto B', 'Descricao produto B', 200.00, 'http://www.psicologianoesporte.com.br/wp-content/uploads/2016/03/atencao-teste.jpg');
INSERT INTO PRODUTO(ID, NOME, DESCRICAO, CUSTO_COMPRA, URL_IMAGEM) VALUES (3, 'Produto C', 'Descricao produto C', 300.00, 'https://static.simplo7.net/static/23103/sku/Mecanica-produto-teste-nao-comprar--p-1533242083167.jpg');
INSERT INTO PRODUTO(ID, NOME, DESCRICAO, URL_IMAGEM) VALUES (4, 'Teste 4', 'Descricao teste 4', 'http://www.psicologianoesporte.com.br/wp-content/uploads/2016/03/atencao-teste.jpg');


