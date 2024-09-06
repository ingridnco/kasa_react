/* eslint-disable jsx-a11y/img-redundant-alt */
import { useParams } from "react-router-dom"
import { useState } from "react"
import { rentals } from "../../data/rentals"
import BW_arrow from "../../assets/BW_arrow.png"
import FW_arrow from "../../assets/FW_arrow.png"

const findLocById = useParamsId => rentals.find(rental => rental.id === useParamsId)

const SlideShow = () => {
  const { id } = useParams()
  const logement = findLocById(id)
  const { pictures } = logement

  // État index de l'image courante
  const [imageIndex, setImageIndex] = useState(0)

  const totalImages = pictures.length

  const photoList = pictures.map((picture, index) => <img key={`${id} photo ${index + 1}`} className="SlideShow__photo" src={picture} alt={`Photo n°${index + 1}/${totalImages}`} />)

  // image précédente
  const handlePrevImage = () => setImageIndex(currentIndex => (currentIndex > 0 ? currentIndex - 1 : totalImages - 1))

  // image suivante
  const handleNextImage = () => setImageIndex(currentIndex => (currentIndex < totalImages - 1 ? currentIndex + 1 : 0))

  const SlideShowStyle = {
    transform: `translateX(-${imageIndex * 100}%)`, // pour un total de (nbre d'images x 100)%
    transition: "transform 0.6s ease",
  }

  return (
    <section className="SlideShow">
      {/* Affiche les flèches s'il y a + d'une image */}
      {totalImages > 1 && (
        <>
          <div className="SlideShow__left">
            <img className="SlideShow__arrows" src={BW_arrow} alt="Précédente" onClick={handlePrevImage} />
          </div>
          <div className="SlideShow__right">
            <img className="SlideShow__arrows" src={FW_arrow} alt="Suivante" onClick={handleNextImage} />
          </div>
        </>
      )}

      <div className="SlideShow__pics">
        <div className="SlideShow__anim" style={SlideShowStyle}>
          {photoList}
        </div>
        {/* Numéro de l'image */}
        {totalImages > 1 && (
          <div className="imageCount">
            {imageIndex + 1} / {totalImages}
          </div>
        )}
      </div>
    </section>
  )
}

export default SlideShow
