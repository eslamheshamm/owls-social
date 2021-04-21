import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import background from "../images/clouds-background.png"

var sectionStyle = {
  width: "100%",
  backgroundImage: `url( ${background}  )`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
}

export default function LogosCloud() {
  return (
    <section
      style={sectionStyle}
      className="flex items-center justify-center h-[800px] md:h-[700px]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 	 my-[150px]  md:my-[250px] w-11/12 lg:w-10/12 mx-auto text-white">
        <article className="flex flex-col justify-center items-start">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Get deals from <br /> 100+ companies
          </h1>
          <p className="text-lg leading-8 mb-8 w-10/12 lg:w-9/12">
            Subscribe to our application and get deals from top notch companies
            in the world every month. Be an exclusive member of the team.{" "}
          </p>
        </article>
        <div className=" row-start-1 md:row-auto flex mx-auto  justify-center items-center w-10/12 mt-12 md:mt-0">
          <StaticImage
            src="../images/Logos.png"
            width={550}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Logos Cloud"
          />
        </div>
      </div>
    </section>
  )
}
