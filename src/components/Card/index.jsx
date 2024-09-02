import { rentals } from "../../data/rentals"
import { Link } from "react-router-dom"

const Card = () => {
  return (
    <ul className="Card__wrapper">
      {rentals.map((rental, index) => (
        <li key={`${rental.id} photo ${index + 1}`} className="Card">
          <Link to={`/logement/${rental.id}`}>
            <img src={rental.cover} alt={rental.title} />
            <div className="Card__gradient"></div>
            <div className="Card__title">{rental.title}</div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
export default Card
