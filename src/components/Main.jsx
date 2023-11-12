import About from "./About"
import Experiences from "./Experiences"
import { Skills } from "./Skills"

export default function Main() {
  return (
    <main>
      <About />
      <Experiences />
      <Skills
        titleSkills="Habilidades"
        arraySkills={[
          "Trabajo en equipo",
          "Código legible ",
          "Documentación clara",
          "Proactivo ",
          "Adaptación ante imprevistos",
        ]}
      />
    </main>
  )
}
