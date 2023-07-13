import { BrowserRouter, Route, Routes } from "react-router-dom";
import InicioPagina from "./paginas/inicio";
import SobrePagina from "./paginas/sobre";
import ContatoPagina from "./paginas/contato";
import MenuComponente from "./componente/menu";

export default function Rotas() {

    return (
        <BrowserRouter>
            <MenuComponente />
            <Routes>
                <Route path="/" element={<InicioPagina />} />
                <Route path="/sobre" element={<SobrePagina />} />
                <Route path="/contato" element={<ContatoPagina />} />
            </Routes>
        </BrowserRouter>
    )
}