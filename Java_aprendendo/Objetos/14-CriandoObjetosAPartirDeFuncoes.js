// Desafio - Cliente genérico;
// Gerar uma função que permita a criação de novos clientes a partir de um modelo;

    function Cliente (nome, cpf, email, saldo)
    {
        this.nome=nome,
        this.cpf=cpf,
        this.email=email,
        this.saldo=saldo,
        this.depositar = function (valor)
        {
            this.saldo +=valor;
        }
    }

    // usar this vai servir para auxiliar uma função construtora, const não serviria.
    // new é uma palavra reservada, serve para dizer que está utilizando a partir da função cliente está criando uma nova instância de cliente.

    const andre = new Cliente("André", "123456789", "andre@gmail.com", 100)

    console.log (andre);