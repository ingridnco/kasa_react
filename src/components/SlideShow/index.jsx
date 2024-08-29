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

  const totalImages = pictures.length

  // image précédente
  const handlePrevImage = () => {
    setImageIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1))
  }

  // image suivante
  const handleNextImage = () => {
    setImageIndex((nextIndex) => (nextIndex === totalImages - 1 ? 0 : nextIndex + 1))
  }

  return (
    <div className="carrousel">
      {/* Affiche les flèches s'il y a + d'une image */}
      {pictures.length > 1 && (
        <div>
          <div className="carrousel__left">
            <img className="carrousel__arrows" src={BW_arrow} alt="Précédente" onClick={handlePrevImage} />
          </div>
          <div className="carrousel__right">
            <img className="carrousel__arrows" src={FW_arrow} alt="Suivante" onClick={handleNextImage} />
          </div>
        </div>
      )}

      <div className="SlideShow">
        <div
          className="SlideShow__track"
          style={{
            display: "flex",
            transform: `translateX(-${imageIndex * 100}%)`, //pour un total de 500%
            transition: "transform 0.5s ease",
          }}
        >
          {pictures.map((picture, index) => (
            <img key={index} className="SlideShow__pics" src={picture} alt={`pics ${index + 1}`} />
          ))}
        </div>
        {/* Numéro de l'image */}
        <div className="imageCount">
          {imageIndex + 1} / {totalImages}
        </div>
      </div>
    </div>
  )
}

export default SlideShow
