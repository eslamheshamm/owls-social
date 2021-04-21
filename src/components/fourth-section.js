import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function FourthSection() {
  return (
    <section className="w-11/12 lg:w-10/12 mx-auto my-20 grid grid-cols-1 md:grid-cols-2 gap-12">
      <figure className="flex  justify-center items-center h-full">
        <StaticImage
          src="../images/Phone-Mockup-1.png"
          width={550}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Phone Mockup"
        />
      </figure>
      <article className="flex flex-col justify-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold ">
          Headline
        </h2>
        <p className="text-lg leading-8 my-8 md:w-9/12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem
          egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non.
          Non commodo volutpat, pharetra, vel.
        </p>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-extrabold flex items-center text-[#8C30F5]"
        >
          Get started <Arrow className="ml-2" />
        </a>
      </article>
    </section>
  )
}

function Arrow(props) {
  return (
    <svg width={22} height={14} viewBox="0 0 22 14" fill="none" {...props}>
      <path
        d="M14.293 1.707A1 1 0 0115.707.293l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L18.586 8H1.011A1.006 1.006 0 010 7c0-.552.453-1 1.011-1h17.575l-4.293-4.293z"
        fill="#8C30F5"
      />
    </svg>
  )
}
