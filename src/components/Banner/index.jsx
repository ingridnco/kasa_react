import { useLocation } from "react-router-dom"
import home_img from "../../assets/home_img.webp"
import about_img from "../../assets/about_img.webp"

const Banner = () => {
  const location = useLocation() // obtention l'URL actuelle

  //  page actuelle: accueil ("/") ou autre page ?
  const currentPageImage = location.pathname === "/" ? home_img : about_img
  const BannerText = location.pathname === "/" && <h1 className="Banner__text">Chez vous, partout et ailleurs</h1>
  const BannerFilter = location.pathname === "/" ? <div className="Banner__homeFilter"></div> : <div className="Banner__aboutFilter"></div>

  return (
    <div className="Banner">
      <img src={currentPageImage} alt="Bannière" />
      {BannerFilter}
      {BannerText}
    </div>
  )
}

export default Banner
