import { useState, useEffect } from "react"
import formatToList from "./formatToList"
// This component will return a block of html with the sctructure of a json

const exampleJson = {
  experiences: [
    {
      company: "Metrohm DropSens",
      jobTitle: "Desarrollador Java",
      companyDescription:
        "Fabricación de electrodomésticos, equipamiento eléctrico y electrónica",
      startDate: "jul. 2023",
      endDate: "Actualidad",
      accomplishmentList: ["accomplishment1", "accomplishment2"],
    },
    {
      company: "Company Name",
      jobTitle: "Job Title",
      companyDescription: "Company Description",
      startDate: "Start Date",
      endDate: "End Date",
      accomplishmentList: ["accomplishment1", "accomplishment2"],
    },
    {
      company: "Company Name2",
      jobTitle: "Job Title2",
      companyDescription: "Company Description2",
      startDate: "Start Date2",
      endDate: "End Dat2e",
      accomplishmentList: ["accomplishment1", "accomplishment2"],
    },
  ],
}

function Experiences() {
  const [experiences, setExperiences] = useState([])
  const experienceTitle = "Responsabilidades"

  useEffect(() => {
    setExperiences(exampleJson.experiences)
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
            <div key={index}>
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
