import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Kombucha tofu chia asymmetrical</h2>
            <p>
              Pour-over bespoke ramps viral knausgaard. Ennui cloud bread
              chillwave unicorn twee tofu lumbersexual salvia mustache af trust
              fund raw denim fanny pack venmo hashtag.
            </p>
            <p>
              Farm-to-table blue bottle hoodie knausgaard lo-fi, humblebrag
              tilde 3 wolf moon.
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person pouring salt in bowl."
            className="about-img"
            placeholder="tracedSVG"
          />
        </section>
      </main>
    </Layout>
  )
}

export default About
