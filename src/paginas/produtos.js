import { Link } from "react-router-dom"
import listaProdutos from "./listaProdutos.json"

export default function ProdutosPagina() {




    return (
        <>
            <h1>Produtos</h1>

            {
                listaProdutos.map((produto) => {

                    return (
                        <>
                            <Link to={`/produto/${produto.slug}`}><h2>{produto.nome} \ R${produto.preco}</h2></Link>
                        </>
                    )
                })

            }



        </>
    )
}