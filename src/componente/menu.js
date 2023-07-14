import { Link } from "react-router-dom";

export default function MenuComponente(){

    return(
        <>

        <ul>
            <Link to="/"><li>Inicio</li></Link>
            <Link to="/sobre"><li>Sobre</li></Link>
            <Link to="/contato"><li>Contato</li></Link> 
            <Link to="/produtos"><li>Produtos</li></Link> 
        </ul>

        </>
    )
}