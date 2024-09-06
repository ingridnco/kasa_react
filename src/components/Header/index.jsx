import { Link } from "react-router-dom"
import logo_kasa from "../../assets/logo_kasa.webp"

const Header = () => {
  return (
    <header className="Header">
      <img src={logo_kasa} className="Header__logo" alt="logo Kasa" />
      <nav className="Header__links">
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  )
}
export default Header
