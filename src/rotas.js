import { BrowserRouter, Route, Routes } from "react-router-dom";
import InicioPagina from "./paginas/inicio";
import SobrePagina from "./paginas/sobre";
import ContatoPagina from "./paginas/contato";
import MenuComponente from "./componente/menu";
import ProdutosPagina from "./paginas/produtos";
import ProdutoDetalhesPagina from "./paginas/produtoDetalhes";
import Erro404Pagina from "./paginas/erro404";
import AgradecimentoPagina from "./paginas/agradecimento";

export default function Rotas() {

    return (
        <BrowserRouter>
            <MenuComponente />
            <Routes>
                <Route path="/" element={<InicioPagina />} />
                <Route path="/sobre" element={<SobrePagina />} />
                <Route path="/contato" element={<ContatoPagina />} />
                <Route path="/produtos" element={<ProdutosPagina/>} />
                <Route path="/agradecimento" element={<AgradecimentoPagina/>} />
                <Route path="/produto/:slug" element={<ProdutoDetalhesPagina/>} />
                <Route path="*" element={<Erro404Pagina/>} />
            </Routes>
        </BrowserRouter>
    )
}