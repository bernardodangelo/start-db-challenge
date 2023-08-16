class CaixaDaLanchonete{

    //padronização de quantidade de decimais e troca de ponto por vírgula utilizando tofixed
    formatarValor(valor){
        return valor.toFixed(2).replace(".", ",");
    }

    //menu de itens
    calcularValorDaCompra(formaDePagamento, itens){
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
            // divide a string do iteminfo em duas partes
            const [item, quantidade] = itemInfo.split(',');
            // verifica se o item existe
            if(!menu[item]){
                return "Item inválido!";
            }
            
            if(item === 'chantily' || item ==='queijo'){
                // associa café com chantily e sanduiche com queijo
                const itemPrincipal = item === 'chantily' ? 'cafe' : 'sanduiche';

                if(!itemQuantidade[itemPrincipal]) {
                    return "Item extra não pode ser pedido sem o principal";
                }
            }
            // aumenta a quantidade do item extra
            itemQuantidade[item] = (itemQuantidade[item] || 0) + parseInt(quantidade);
        }

        // calculo do preço
        for(const item in itemQuantidade){
            total += menu[item] * itemQuantidade[item];
        }

        // escolhe a forma de pagamento
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

        if(itens.length === 0){
            return "Não há itens no carrinho de compra!";
        }

        if(itens.some(itemInfo => itemInfo.endsWith(',0'))){
            return "Quantidade inválida!";
        }

        // chama a funçao formatar valor e retorna o total já formatado
        return `R$ ${this.formatarValor(total)}`;
    }
}
export { CaixaDaLanchonete };