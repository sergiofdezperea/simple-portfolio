import formatToList from "./formatToList"

export function Skills({ titleSkills, arraySkills }) {
  // console.log("Skills.jsx: arraySkills: ", arraySkills)
  const unOrderedList = arraySkills
    ? formatToList(titleSkills, arraySkills)
    : null

  return (
    <article className="card card__skills">
      <h3>{titleSkills}</h3>
      <ul className="two-columns">{unOrderedList}</ul>
    </article>
  )
}
