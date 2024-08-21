import { Link } from "react-router-dom"
import "../../styles/scss/App.css"
import logo_kasa from "../../assets/logo_kasa.webp"

const Header = () => {
  return (
    <nav className="Header">
      <img src={logo_kasa} className="Header__logo" alt="#" />
      <div className="Header__links">
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </div>
    </nav>
  )
}
export default Header
