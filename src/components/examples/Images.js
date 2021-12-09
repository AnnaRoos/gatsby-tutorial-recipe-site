import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
  return (
    <Wrapper>
      {/*       <StaticImage id="big" src="../../assets/images/big.jpg" alt="food" />
       */}{" "}
      {/*   <StaticImage
        src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1613583026/course%20slides/js-2_mo9uqy.png"
        alt="code"
      /> */}
      <article>
        <h4>Constrained/Default</h4>
        <StaticImage
          src="../../assets/images/recipes/recipe-3.jpeg"
          alt="food"
          placeholder="tracedSVG"
          layout="constrained"
          className="example-image"
          as="section"
        />
      </article>
      <article>
        <h4>Fixed</h4>
        <StaticImage
          src="../../assets/images/recipes/recipe-3.jpeg"
          alt="food"
          placeholder="blurred"
          layout="fixed"
          className="example-image"
          as="div"
          width={200}
        />
      </article>
      <article>
        <h4>Fullwidth</h4>
        <StaticImage
          src="../../assets/images/recipes/recipe-3.jpeg"
          alt="food"
          placeholder="dominantColor"
          layout="fullWidth"
          className="example-image"
          as="article"
        />
      </article>
      <h1>gatsby images</h1>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;
  article {
    border: 2px solid red;
  }
  .example-image {
    border-radius: 1rem;
    height: 300px;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    .example-image {
      height: 200px;
    }
  }
`

export default Images
