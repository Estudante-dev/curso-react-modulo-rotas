import { Link } from "react-router-dom";

export default function MenuComponente(){

    return(
        <>

        <ul>
            <Link to="/"><li>Inicio</li></Link>
            <Link to="/sobre"><li>Sobre</li></Link>
            <Link to="/contato"><li>Contato</li></Link> 
        </ul>

        </>
    )
}