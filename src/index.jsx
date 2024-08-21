import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/scss/App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import reportWebVitals from "./reportWebVitals"
import Home from "./pages/Home"
import About from "./pages/About"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Error from "./components/Error"
import Logement from "./pages/Logement"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
