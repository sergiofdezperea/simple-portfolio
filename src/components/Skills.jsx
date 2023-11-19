import formatToList from "./formatToList"
import { useState, useEffect, useContext } from "react"
import { LanguageContext } from "../App"

export default function Skills() {
  const { language } = useContext(LanguageContext)
  const [skills, setSkills] = useState()
  useEffect(() => {
    const getData = async () => {
      fetch("/assets/json/skills.json")
        .then((response) => response.json())
        .then((response) => {
          setSkills(response[language])
        })
        .catch((err) => console.error(err))
    }
    getData()
  }, [language])

  let unOrderedList =
    skills && skills.arraySkills
      ? formatToList(skills.titleSkills, skills.arraySkills)
      : null

  return (
    <article className="card card__skills">
      <h3>{skills && skills.titleSkills}</h3>
      <ul className="two-columns">{skills && unOrderedList}</ul>
    </article>
  )
}
