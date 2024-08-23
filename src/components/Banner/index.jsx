import "../../styles/scss/App.css"
import { useLocation } from "react-router-dom"
import home_img from "../../assets/home_img.webp"
import about_img from "../../assets/about_img.webp"

const Banner = () => {
  const location = useLocation() // On récupère l'objet location pour obtenir l'URL actuelle

  // On vérifie si on est sur la page d'accueil ("/") ou une autre page
  const pageImage = location.pathname === "/" ? home_img : about_img
  const text = location.pathname === "/" ? <h1 className="Banner__text">Chez vous, partout et ailleurs</h1> : null
  const darker = location.pathname === "/" ? <div className="Banner__home"></div> : <div className="Banner__about"></div>
  return (
    <div className="Banner">
      <img src={pageImage} alt="Bannière" />
      {darker}
      {text}
    </div>
  )
}

export default Banner
