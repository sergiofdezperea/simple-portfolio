import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"

import PropTypes from "prop-types"
import { Fragment, createContext, useState } from "react"

// Create a context for the language
export const LanguageContext = createContext()

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es") // default language is Spanish

  return (
    // Step 3: Return the context provider
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

const siteProps = {
  email: "sergiofdezperea@gmail.com",
  gitHub: "sergiofdezperea",
  linkedIn: "sergio-fernandez-perea",
}

function App() {
  return (
    <LanguageProvider>
      <Fragment>
        <Header />
        <Main />
        <Footer {...siteProps} />
      </Fragment>
    </LanguageProvider>
  )
}

export default App
