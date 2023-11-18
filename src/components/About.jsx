import "./About.css"
import { Fragment } from "react"
import { useState, useEffect, useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { LanguageContext } from "../App"

export default function About() {
  const { language } = useContext(LanguageContext)
  const envelovepIcon = <FontAwesomeIcon icon={faEnvelope} />
  const date = new Date()
  const yearsInSector =
    date.getMonth() + 1 == 12
      ? date.getFullYear() - 2016
      : date.getFullYear() - 2017

  // Read from a json where you can select the language
  // and the text that you want to display
  // Get language date when context change
  const [about, setAbout] = useState()
  useEffect(() => {
    const getData = async () => {
      fetch("/assets/json/about.json")
        .then((response) => response.json())
        .then((response) => {
          setAbout(response[language])
        })
        .catch((err) => console.error(err))
    }
    getData()
  }, [language])

  return (
    <Fragment>
      <article className="card card--profile">
        <div className="card__name-and-image-container">
          <div className="card__name-container">
            <h1 className="card__name">Sergio Fdez Perea</h1>
            {about && <p className="card__subtitle">{about.profesion}</p>}
          </div>
          <div className="card__image-container">
            <img
              className="card__image-profile"
              src="/assets/images/fotoEmpresa.png"
              alt="Profile picture"
            />
          </div>
        </div>
        <div className="card__body">
          <p className="use-break-lines">
            {yearsInSector} {about && about.aboutme}
          </p>
          <div className="card__link">
            {envelovepIcon}
            <a href="mailto:sergiofdezperea@gmail.com">
              sergiofdezperea@gmail.com
            </a>
          </div>
        </div>
      </article>
    </Fragment>
  )
}
