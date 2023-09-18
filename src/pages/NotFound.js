
import { Link } from "react-router-dom"
import "../style/components/_not-found.scss";


export default function NotFound() {
  return (
    <div className="container" >
      <h1 className="erreur-code" >404</h1>
      <p className="erreur-message">Oups! La page que vous demandez n'existe pas.</p>
      <p className="erreur-home"><Link to="/"> Retourner sur la page d'accuille  </Link></p>
    </div>
  )
}
