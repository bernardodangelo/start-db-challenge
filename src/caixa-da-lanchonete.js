class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        const menu = {
            cafe: 3.00,
            chantily: 1.50,
            suco: 6.20,
            sanduiche: 6.50,
            queijo: 2.00,
            salgado: 7.25,
            combo1: 9.50,
            combo2: 7.50,
        };
        let total = 0;
        let itemQuantidade = {}; 

        for(const itemInfo of itens){
            cost [itemInfo, quantidade] = itemInfo.split(',');
            if(!menu[item]){
                return "Item inválido!";
            }

            if(item === 'chantily' || item ==='queijo'){
                const itemPrincipal = item === 'chantily' ? 'café' : 'sanduiche';

                if(!itemQuantidade[itemPrincipal]) {
                    return "Item extra não pode ser pedido sem o principal";
                }
            itemQuantidade[item] = (itemQuantidades[item] || 0) + parseInt(quantidade);    
            }
        }

        for(const item in this.itemQuantidade){
            total += menu[item] * itemQuantidade[item];
        }

        switch(formaDePagamento){
            case 'dinheiro':
                total *= 0.95;
                break;
            case 'credito':
                total *= 1.03;
                break;
            case 'debito':
                break;
            default:
                return "Forma de pagamento inválida!";
        }

        if(itens.tamanho === 0){
            return "Não há itens no carrinho de compra!";
        }
    }
}


export { CaixaDaLanchonete };
