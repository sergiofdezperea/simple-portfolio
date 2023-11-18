import { useState, useEffect, useContext } from "react"
import formatToList from "./formatToList"
import { LanguageContext } from "../App"

function Experiences() {
  const [experiences, setExperiences] = useState([])
  const { language } = useContext(LanguageContext)
  const experienceTitle =
    language === "es" ? "Principales logros" : "Key accomplishments"

  // Load data from json file
  useEffect(() => {
    const getData = async () => {
      fetch("/assets/json/experiences.json")
        .then((response) => response.json())
        .then((response) => {
          setExperiences(response[language].experiences)
        })
        .catch((err) => console.error(err))
    }
    getData()
  }, [language])

  return (
    <section className="card section section--experiences">
      <h2 className="section__title">Experiencia</h2>
      <div className="section__content">
        {experiences.map((experience, index) => {
          let unOrderedList = experience.accomplishmentList
            ? formatToList(experienceTitle, experience.accomplishmentList)
            : null
          return (
            <div key={index} className="experience">
              <h3>
                {experience.jobTitle} ({experience.company})
              </h3>
              <p>
                {experience.startDate}-{experience.endDate} · {experience.city}(
                {experience.companyDescription})
              </p>

              <h3>{experienceTitle}</h3>
              <ul>{unOrderedList}</ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Experiences
