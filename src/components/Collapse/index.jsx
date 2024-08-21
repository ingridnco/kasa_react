import { useState, useRef, useEffect } from "react"
import arrow from "../../assets/arrow.png"

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState("0px")
  const contentRef = useRef(null)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current.scrollHeight}px`)
    } else {
      setHeight("0px")
    }
  }, [isOpen])

  return (
    <div className="Collapse__wrapper">
      <div onClick={toggleCollapse} className="Collapse">
        <div>{title}</div>
        <img src={arrow} alt="flèche" className={`Arrow ${isOpen ? "open" : ""}`} />
      </div>
      <div
        ref={contentRef}
        className={`Collapse__content ${isOpen ? "open" : ""}`} // Ajout de la classe "open" conditionnellement
        style={{ height }}
      >
        <div className="Collapse__content__inner">
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default Collapse
