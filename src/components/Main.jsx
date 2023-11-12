import About from "./About"
import Experiences from "./Experiences"
import { Skills } from "./Skills"

export default function Main() {
  return (
    <main>
      <About />
      <Experiences />
      <Skills
        titleSkills="Skills"
        arraySkills={[
          "Java",
          "JavaScript",
          "Cosas muy muy Bonitas",
          "4",
          "blibliblibli",
        ]}
      />

      <Skills
        titleSkills="SoftSkills"
        arraySkills={[
          "Java",
          "JavaScript",
          "Cosas muy muy Bonitas",
          "4",
          "blibliblibli",
        ]}
      />
    </main>
  )
}
