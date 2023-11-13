import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"

import { Fragment } from "react"

const siteProps = {
  email: "sergiofdezperea@gmail.com",
  gitHub: "sergiofdezperea",
  linkedIn: "sergio-fernandez-perea",
}
function App() {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer {...siteProps} />
    </Fragment>
  )
}

export default App
