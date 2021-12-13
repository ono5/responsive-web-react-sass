import { useState, useEffect } from "react"
import { Helmet } from "react-helmet-async"
import PageContainer from "../components/pages-parts/PageContainer"
import Footer from "../components/footer/Footer"
import ContactForm from "../components/pages-parts/ContactForm"

const Contact = () => {
  const [state] = useState({
    heading: "contact us",
    pageHeading: 'leave your message in the contact form',
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque distinctio facere nobis in nam quibusdam animi odio aliquam dicta qui, hic corporis dolore voluptatibus facilis minus sit aperiam id officia."
  })
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Helmet>
        <title>Contact page</title>
        <meta name="description" content="Travel friends contact page"/>
      </Helmet>
      <PageContainer data={state}>
	  	<ContactForm />
	  </PageContainer>
      <Footer />
    </>
  )

}

export default Contact
