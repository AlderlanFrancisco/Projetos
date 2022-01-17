// Desafio - Cliente poupança
// Aproveitar o cliente que já existe e criar a partir dele um novo tipo de cliente para contas poupança

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
            console.log (`O saldo da conta corrente de ${this.nome} é ${this.saldo}`);
        }
    }

    class Clientepoup extends Cliente 
    {
        constructor (nome, cpf, email, saldo, saldopoup)
        {
            super (nome, cpf, email, saldo); // quais propriedades a gente quer de "Cliente"
            this.saldopoup = saldopoup;
        }
        depositarpoup (valor)
        {
            this.saldopoup += valor;
        }
        ExibirSaldoPoup ()
        {
            console.log (`O saldo da poupança do ${this.nome} é ${this.saldopoup}`)
        }
    }
    const andre = new Clientepoup ("André", "5896325863", "andre@gmail.com", 100,150);
    andre.depositar (30);
    andre.depositarpoup (50);
    andre.exibirSaldo ();
    andre.ExibirSaldoPoup ();
    console.log (andre);