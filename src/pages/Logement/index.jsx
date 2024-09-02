import { rentals } from "../../data/rentals"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import SlideShow from "../../components/SlideShow"
import Collapse from "../../components/Collapse"
import red_star from "../../assets/red_star.png"
import grey_star from "../../assets/grey_star.png"

const findLocById = useParamsId => rentals.find(rental => rental.id === useParamsId)

const Logement = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const logement = findLocById(id)

  // useEffect pour redirection
  useEffect(() => {
    if (!logement) {
      navigate("/error") // Redirige vers page d'erreur si ID inconnue
    }
  }, [logement, navigate])

  // Si le logement n'est pas trouvé, return = null
  if (!logement) {
    return null
  }

  const { description, equipments, title, host, rating, location, tags } = logement
  const equipmentList = (
    <ul>
      {equipments.map((equipment, index) => (
        <li key={`${id} equipment${index}`}>{equipment}</li>
      ))}
    </ul>
  )
  const tagList = (
    <ul className="location__taglist">
      {tags.map((tag, index) => (
        <li className="no_list_style" key={`${id} tag${index}`}>
          {tag}
        </li>
      ))}
    </ul>
  )

  // Gestion des étoiles de rating
  const range = [1, 2, 3, 4, 5]
  const stars = range.map(rangeNum => (rangeNum <= rating ? <img className="owner__stars" src={red_star} alt="Étoile rouge" key={rangeNum} /> : <img className="owner__stars" src={grey_star} alt="Étoile grise" key={rangeNum} />))

  return (
    <>
      <SlideShow />
      <div className="location__container">
        <div className="location__details">
          <h1 className="location__title">{title}</h1>
          <p>{location}</p>
          {tagList}
        </div>

        <div className="owner">
          <p className="owner__profile">
            <span>{host.name}</span>
            <img className="owner__pic" src={host.picture} alt="portrait du propriétaire" />
          </p>
          <p>{stars}</p>
        </div>
      </div>
      <div className="Collapse__container">
        <Collapse title="Description" content={description} />
        <Collapse title="Équipement" content={equipmentList} />
      </div>
    </>
  )
}

export default Logement
