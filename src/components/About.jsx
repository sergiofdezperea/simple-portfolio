import "./About.css"
import { Fragment } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function About() {
  const envelovepIcon = <FontAwesomeIcon icon={faEnvelope} />
  const date = new Date()
  const yearsInSector =
    date.getMonth() + 1 == 12
      ? date.getFullYear() - 2016
      : date.getFullYear() - 2017

  return (
    <Fragment>
      <article className="card card--profile">
        <div className="card__name-and-image-container">
          <div className="card__name-container">
            <h1 className="card__name">Sergio Fdez Perea</h1>
            <p className="card__subtitle">Desarrolador de software</p>
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
          <p>
            {yearsInSector} años de experiencia en el sector. Desde pequeño me
            ha gustado la informática y siempre he estado interesado en aprender
            sobre diferentes tecnologías. Me apasiona el código legible y que
            sea sencillo de modificar, ya que creo que es fundamental para el
            desarrollo de software de calidad.
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
