# CAIXA DA LANCHONETE

## COMO BAIXAR O CÓDIGO E SUBMETER MINHA SOLUÇÃO?
Para completar a etapa do desafio você terá que baixar a estrutura do código aqui na Azure, resolver o desafio e entregá-lo no repositório no seu github.

### BAIXANDO A ESTRUTURA
Para baixar a estrutura no formato zip, basta clicar neste [link](https://dev.azure.com/db-tecnologia/371ab069-cd1e-4ede-8ae5-fa54dd981c56/_apis/git/repositories/a3a8fe92-b324-4d6b-abbd-1953e46fb075/items?path=/&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=main&resolveLfs=true&%24format=zip&api-version=5.0&download=true).


### ENTREGANDO O DESAFIO
Após resolver o desafio e validá-lo com os testes (mais detalhes nos tópicos abaixo), você terá que criar um repositório no [Github](https://github.com/) com o nome de `desafio-$seunome-$sobrenome` (substitua os nomes com $ pelo seu próprio nome e sobrenome). Deṕos disso, você pode enviar o link do seu repositório para que possamos validá-lo para o e-mail: `start@dbserver.com.br`

Se você ainda não teve contato com essas ferramentas, não tem problema, separamos um material para lhe ajudar nessa etapa: [Como usar Git e Github na prática](https://www.youtube.com/watch?v=UBAX-13g8OM).


## O DESAFIO
Olá! Você foi contratado para automatizar o caixa da Lanchonete da DB.
Sua missão será construir a lógica que calcula o valor de uma compra de acordo com o cardápio, regras e descontos da Lanchonete.

### CARDÁPIO

  | codigo    | descrição                   | valor   |
  |-----------|-----------------------------|---------|
  | cafe      | Café                        | R$ 3,00 |
  | chantily  | Chantily (extra do Café)    | R$ 1,50 |
  | suco      | Suco Natural                | R$ 6,20 |
  | sanduiche | Sanduíche                   | R$ 6,50 |
  | queijo    | Queijo (extra do Sanduíche) | R$ 2,00 |
  | salgado   | Salgado                     | R$ 7,25 |
  | combo1    | 1 Suco e 1 Sanduíche        | R$ 9,50 |
  | combo2    | 1 Café e 1 Sanduíche        | R$ 7,50 |


### FORMAS DE PAGAMENTO
Atualmente a Lanchonete aceita as seguintes formas de pagamento:
 - dinheiro
 - debito
 - credito

O sistema deve receber essa informação como string, utilizando a grafia exatamente igual aos exemplos acima.

### DESCONTOS E TAXAS
 - Pagamento em dinheiro tem 5% de desconto
 - Pagamento a crédito tem acréscimo de 3% no valor total

### OUTRAS REGRAS

- Caso item extra seja informado num pedido que não tenha o respectivo item principal, apresentar mensagem "Item extra não pode ser pedido sem o principal".
- Combos não são considerados como item principal.
- É possível pedir mais de um item extra sem precisar de mais de um principal.
- Se não forem pedidos itens, apresentar mensagem "Não há itens no carrinho de compra!"
- Se a quantidade de itens for zero, apresentar mensagem "Quantidade inválida!".
- Se o código do item não existir, apresentar mensagem "Item inválido!"
- Se a forma de pagamento não existir, apresentar mensagem "Forma de pagamento inválida!"

### O CÓDIGO
Você está recebendo uma estrutura básica para desenvolver a lógica do caixa. O arquivo principal está localizado dentro da pasta `src` e se chama `caixa-da-lanchonete.js`. Você pode desenvolver a sua lógica criando outros arquivos, métodos e até mesmo outras classes, porém o resultado deve poder ser obtido através do método `calcularValorDaCompra`.

> ALERTA:
> É importante que a estrutura básica descrita acima não seja alterada, incluindo nome e parâmetros do método. Iremos validar sua solução através destes, assim como você pode validar através dos cenários de testes já implementados em `src/caixa-da-lanchonete.test.js`.

### INSTALANDO E RODANDO NA SUA MÁQUINA
1. Instalar o [Node](https://nodejs.org/en/)
2. Instalar dependencias do projeto com o seguinte comando:
```bash
npm install
```

### VALIDANDO A SOLUÇÃO
Junto com a estrutura básica você está recebendo alguns cenários de testes para auxiliar na validação da sua solução. Recomendamos que você crie mais casos de teste para aumentar a confiabilidade da sua solução.
Para testar sua solução com os cenários já criados, basta rodar o seguinte comando:
```bash
npm test
```

Para saber mais consulte a [Documentação do Jest](https://jestjs.io/pt-BR/docs/getting-started).

### INPUTS
O método `calcularValorDaCompra` recebe dois parâmetros, `formaDePagamento` e `itens`, sendo o primeiro uma string com os possíveis valores válidos: `debito`, `credito` e `dinheiro`. O segundo parâmetro contém uma array dos itens que serão comprados. Cada item é uma string contendo o código do item e a quantidade do mesmo separados por uma vírgula.
EXEMPLO:
```js
['cafe,1','chantily,1']
```

### OUPUTS
O retorno do método `calcularValorDaCompra` deve ser sempre uma string e conteúdo dela pode ser ou o valor total da compra ou uma mensagem de erro conforme as regras descritas anteriormente. O valor da compra deve ser formatado com `R$` e decimais separados por vírgula.

Para padronizar a quantidade de decimais, utilize o método `toFixed` do JavaScript. Esse método serve o propósito deste desafio, porém na vida real a regra de arredondamento deve ser conferida! Para saber mais consulte a [Documentação do Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed).
EXEMPLO:
```js
// exemplo de saída do valor da compra
"R$ 6,00"

// exemplo de saída de erro
"Forma de pagamento inválida!"
```

### EXEMPLOS

EXEMPLO 1: Compra de chantily sem café.
```js
new CaixaDaLanchonete()
  .calcularValorDaCompra('debito', ['chantily,1']);
```
O resultado esperado deve ser:
```
"Item extra não pode ser pedido sem o principal"
```

<br/>

EXEMPLO 2: Compra de café com chantily.
```js
new CaixaDaLanchonete()
  .calcularValorDaCompra('debito', ['cafe,1','chantily,1']);
```
O resultado esperado deve ser:
```
"R$ 4,50"
```

<br/>

EXEMPLO 3: Compra de combo e dois cafés
```js
new CaixaDaLanchonete()
  .calcularValorDaCompra('credito', ['combo1,1','cafe,2']);
```
O resultado esperado deve ser:
```
"R$ 15,96"
```
