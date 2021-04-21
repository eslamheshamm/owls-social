import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero-section"
import LogosCloud from "../components/second-section"
import Features from "../components/third-section"
import FourthSection from "../components/fourth-section"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <LogosCloud />
    <Features />
    <FourthSection />
  </Layout>
)

export default IndexPage
