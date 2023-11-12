import { useState, useEffect } from "react"
import formatToList from "./formatToList"
// This component will return a block of html with the sctructure of a json
const experiencesJson = await fetch("/assets/json/experiences.json")
const data = await experiencesJson.json()
function Experiences() {
  const [experiences, setExperiences] = useState([])
  const experienceTitle = "Responsabilidades"

  useEffect(() => {
    setExperiences(data.experiences)
  }, [])

  console.log("Experiences.jsx: experiences: ", experiences)

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
