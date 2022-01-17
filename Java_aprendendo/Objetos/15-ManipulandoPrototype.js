// Desafio - Cliente poupança
// Aproveitar o cliente que já existe e criar a partir dele um novo tipo de cliente para contas poupança

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

    function ClientePoupança(nome, cpf, email, saldo, saldoPoup)
    {
// .call vai chamar o clientepoupança vai herdar todas as propriedades do cliente, é necessário informar quais propriedades ele vai herdar;
// herda também as funções presentes
        Cliente.call(this, nome, cpf, email, saldo);
        this.saldoPoup = saldoPoup;
    }

    const ju = new ClientePoupança ("Ju", "1582695369", "Ju@gmail.com", 100, 200);
    console.log (ju);
// .prototype serve para adicionar uma função dentro da propriedade do objeto prototype, nesse caso, o cliente poupança
    ClientePoupança.prototype.depositarPoup = function (valor)
    {
        this.saldoPoup += valor;
    }
    ju.depositarPoup (30);
    ju.depositar (50);
    console.log (`O saldo de ju é ${ju.saldo}`);
    console.log (`O saldo da poupança de ju é ${ju.saldoPoup}`);

    // Caso não passasse o valor de saldopoup daria como indefinido no valor referente a saldopoup, exemplo:
    const Andre = new ClientePoupança ("Ju", "1582695369", "Ju@gmail.com", 100);
    console.log (Andre);
