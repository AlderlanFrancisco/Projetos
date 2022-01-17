class Cliente // Sempre da o nome da classe com letra maiúscula;
    {
        constructor(nome, cpf, email, saldo)
        {
            this.nome = nome;
            this.cpf = cpf;
            this.email = email;
            this.saldo = saldo;
        }
        depositar (valor)
        {
            this.saldo += valor;
        }
        exibirSaldo ()
        {
            console.log (`O saldo de ${this.nome} é ${this.saldo}`);
        }
    }

    const andre = new Cliente("André", "5679864132", "andre@gmail.com", 100);
    console.log (andre)
    andre.exibirSaldo ();

