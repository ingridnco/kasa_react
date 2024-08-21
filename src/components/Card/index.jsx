import "../../styles/scss/App.css"
import { annonces } from "../../data/annonces"
import { Link } from "react-router-dom"

const Card = () => {
  return (
    <div>
      <ul className="Card__wrapper">
        {annonces.map((data) => (
          <li key={data.id} className="Card">
            <Link to={`/gallery/${data.id}`}></Link>
            <img src={data.cover} alt={data.title} />
            <div className="Card__gradient"></div>
            <div className="Card__title">{data.title}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Card
