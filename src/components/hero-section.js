import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2  my-[150px] md:mt-[250px] md:mb-[200px] w-11/12 lg:w-10/12 mx-auto">
      <article className="flex flex-col justify-start items-start mt-12">
        <h1 className="text-4xl sm:text-3xl md:text-6xl lg:text-7xl font-extrabold mb-4">
          Owls Social
        </h1>
        <p className="text-lg mb-8  sm:w-9/12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer.
        </p>
        <button className="bg-[#5F06EE] px-14 text-xl py-4 text-white rounded-lg font-bold">
          <a href="https://" target="_blank" rel="noopener noreferrer">
            Join Now
          </a>
        </button>
      </article>
      <figure className="row-start-1 md:row-auto flex justify-center items-center">
        <StaticImage
          src="../images/hero-1.png"
          width={800}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Owls Social"
        />
      </figure>
    </section>
  )
}
