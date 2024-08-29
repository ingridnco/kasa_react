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

  // État index de l'image courante
  const [imageIndex, setImageIndex] = useState(0)

  // image précédente
  const handlePrevImage = () => {
    setImageIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1))
  }

  // image suivante
  const handleNextImage = () => {
    setImageIndex((nextIndex) => (nextIndex === pictures.length - 1 ? 0 : nextIndex + 1))
  }

  return (
    <div className="carrousel">
      {/* Affiche les flèches s'il y a + d'une image */}
      {pictures.length > 1 && (
        <div>
          <div className="carrousel__left">
            <img className="centerArrows" src={BW_arrow} alt="Précédente" onClick={handlePrevImage} />
          </div>
          <div className="carrousel__right">
            <img className="centerArrows" src={FW_arrow} alt="Suivante" onClick={handleNextImage} />
          </div>
        </div>
      )}

      <ul className="SlideShow__pic">
        {/* Affichage de l'image courante uniquement */}
        <li key={pictures[imageIndex]} className="no_list_style imageCount__center">
          <img className="pics" src={pictures[imageIndex]} alt="galerie" />
          {/* Numéro de l'image */}
          <div className="imageCount">
            {imageIndex + 1} / {pictures.length}
          </div>
        </li>
      </ul>
    </div>
  )
}

export default SlideShow
