import "./Switches.css"
import { Fragment, useState, useContext } from "react"
import { LanguageContext } from "../App"

export default function Switches() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const { language, setLanguage } = useContext(LanguageContext)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.body.classList.toggle("dark")

    const toggleThemeIcon = document.getElementById("theme-icon")
    const toggleThemeText = document.getElementById("theme-text")

    if (isDarkMode) {
      toggleThemeIcon.src = "\\assets\\icons\\sun.svg"
      toggleThemeText.textContent = "Light Mode"
    } else {
      toggleThemeIcon.src = "\\assets\\icons\\moon.svg"
      toggleThemeText.textContent = "Dark Mode"
    }
  }

  const toggleLanguaje = () => {
    const toggleIcon = document.getElementById("languaje-icon")
    const toggleText = document.getElementById("languaje-text")
    if (language === "es") {
      setLanguage("en")
      toggleIcon.src = "\\assets\\icons\\en.png"
      toggleText.textContent = "EN"
    } else {
      setLanguage("es")
      toggleIcon.src = "\\assets\\icons\\es.png"
      toggleText.textContent = "ES"
    }
  }

  return (
    <Fragment>
      <div className="switches">
        <div className="toggle-theme left" onClick={toggleDarkMode}>
          <img
            id="theme-icon"
            src="\assets\icons\sun.svg"
            alt="icon theme"
            className="toggle__icon"
          />
          <p id="theme-text" className="toggle__text ">
            Light Mode
          </p>
        </div>
        <div className="toggle-theme right" onClick={toggleLanguaje}>
          <img
            id="languaje-icon"
            src="\assets\icons\es.png"
            alt="icon languaje"
            className="toggle__icon"
          />
          <p id="languaje-text" className="toggle__text ">
            ES
          </p>
        </div>
      </div>
    </Fragment>
  )
}
