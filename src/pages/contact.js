import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>want to get in touch?</h3>
            <p>
              Irony viral church-key selfies kitsch hammock migas live-edge
              mustache leggings DIY williamsburg.
            </p>
            <p>
              Activated charcoal sriracha stumptown, venmo kale chips
              post-ironic cardigan waistcoat twee glossier.
            </p>
            <p>
              Offal try-hard prism man bun, godard williamsburg fixie chia tote
              bag you probably haven't heard of them hella franzen viral
              drinking vinegar.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
