/* eslint-disable no-useless-escape */
import { Fragment, useState } from "react"

export default function Switches() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.body.classList.toggle("dark")

    const toggleThemeIcon = document.getElementById("toggle-icon")
    const toggleThemeText = document.getElementById("toggle-text")

    if (isDarkMode) {
      toggleThemeIcon.src = "\\assets\\icons\\sun.svg"
      toggleThemeText.textContent = "Light Mode"
    } else {
      toggleThemeIcon.src = "\\assets\\icons\\moon.svg"
      toggleThemeText.textContent = "Dark Mode"
    }
  }

  return (
    <Fragment>
      <div className="switches">
        <div className="toggle-theme" onClick={toggleDarkMode}>
          <img
            id="toggle-icon"
            src="\assets\icons\sun.svg"
            alt="icon theme"
            className="toggle-theme__icon"
          />
          <p id="toggle-text" className="toggle-theme__text">
            Light Mode
          </p>
        </div>
      </div>
    </Fragment>
  )
}
