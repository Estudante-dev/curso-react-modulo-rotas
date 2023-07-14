import { Link, useNavigate, useParams } from "react-router-dom"
import listaProdutos from "./listaProdutos.json"


import { useEffect, useState } from "react"

export default function ProdutoDetalhesPagina(){

    let { slug } = useParams();
    let [produto, setProduto] = useState({})

    const navigate = useNavigate();

    useEffect(() => {
        let produtoSelecionado = listaProdutos.filter((item) => { return item.slug === slug })
        setProduto(produtoSelecionado[0])
    }, [])

    function compraUsuario(){
        let cartaoCredito = prompt("Digite os dados do seu cartão de crédito");
        if(cartaoCredito.length > 0){
            navigate("/agradecimento")
        }
    }

    return(
        <>
        <h1>Produto {produto.nome}</h1>
        <h2>R$ {produto.preco}</h2>
        <p>{produto.descricao}</p>
        <button onClick={compraUsuario}>Comprar</button>
        </>
    )
}