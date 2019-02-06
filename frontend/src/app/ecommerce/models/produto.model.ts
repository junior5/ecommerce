export class Produto {
    id: number;
    nome: string;
    descricao: string;
    custoCompra: number;
    urlImagem: string;

    constructor(id: number, nome: string, descricao:string, custoCompra: number, urlImagem: string) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.urlImagem = urlImagem;
    }
}