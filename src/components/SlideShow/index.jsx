import { useParams } from "react-router-dom"
import { useState } from "react"
import { annonces } from "../../data/annonces"
import BW_arrow from "../../assets/BW_arrow.png"
import FW_arrow from "../../assets/FW_arrow.png"

const findId = (useParamsId) => {
  return annonces.find((annonce) => annonce.id === useParamsId)
}

const SlideShow = () => {
  const { id } = useParams()
  const logement = findId(id)
  const { pictures } = logement

  // État pour suivre l'index de l'image courante
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Fonction pour aller à l'image suivante
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1))
  }

  // Fonction pour aller à l'image précédente
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1))
  }

  return (
    <div className="carrousel">
      {/* Affiche les flèches uniquement s'il y a plus d'une image */}
      {pictures.length > 1 && (
        <div>
          <div className="carrousel__right">
            <img className="centerArrows" src={FW_arrow} alt="Flèche suivante" onClick={handleNextImage} />
          </div>
          <div className="carrousel__left">
            <img className="centerArrows" src={BW_arrow} alt="Flèche précédente" onClick={handlePrevImage} />
          </div>
        </div>
      )}
      <ul className="SlideShow__pic">
        {/* Affichage de l'image courante uniquement */}
        <li className="list_hidden imageCount__center" key={pictures[currentImageIndex]}>
          <img className="pics" src={pictures[currentImageIndex]} alt="galerie" />
          {/* Numérotation dynamique de l'image */}
          <div className="imageCount">
            {currentImageIndex + 1} / {pictures.length}
          </div>
        </li>
      </ul>
    </div>
  )
}

export default SlideShow
