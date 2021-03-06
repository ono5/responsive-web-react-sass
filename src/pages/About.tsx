import { useState, useEffect } from "react"
import { Helmet } from "react-helmet-async"
import PageContainer from "../components/pages-parts/PageContainer"
import Footer from "../components/footer/Footer"
import AboutImage from "../components/pages-parts/AboutImage"

const About = () => {
  const [state] = useState({
    heading: "about us",
    pageHeading: 'world best travel agency company since 2005',
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque distinctio facere nobis in nam quibusdam animi odio aliquam dicta qui, hic corporis dolore voluptatibus facilis minus sit aperiam id officia."
  })
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Helmet>
        <title>About page</title>
        <meta name="description" content="Travel friends about page"/>
      </Helmet>
      <PageContainer data={state}>
        <AboutImage />
      </PageContainer>
      <Footer />
    </>
  )
}

export default About
