import "../../styles/scss/App.css"
import { annonces } from "../../data/annonces"
import { Link } from "react-router-dom"

const Card = () => {
  return (
    <ul className="Card__wrapper">
      {annonces.map((data) => (
        <li key={data.id} className="Card">
          <Link to={`/logement/${data.id}`}>
            <img src={data.cover} alt={data.title} />
            <div className="Card__gradient"></div>
            <div className="Card__title">{data.title}</div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
export default Card
