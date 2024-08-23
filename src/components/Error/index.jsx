import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div className="Error404">
      <h1>404</h1>
      <h2>
        Oups ! La page que <span className="Error404__span">vous demandez n'existe pas !</span>
      </h2>
      <Link to="/" className="Error404__link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error
