import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import FeatureIcon1 from "./assets/feature-icon-1"
import FeatureIcon2 from "./assets/feature-icon-2"
import FeatureIcon3 from "./assets/feature-icon-3"
import FeatureIcon4 from "./assets/feature-icon-4"

export default function Features() {
  return (
    <section className=" w-11/12 lg:w-10/12 mx-auto my-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12">
        App Features
      </h2>
      <div className="grid grid-cols-1 gap-12 md:gap-0 md:grid-cols-2">
        <article className="flex flex-col justify-center items-center">
          <ul>
            <li className="flex items-start mb-12">
              <FeatureIcon4 className="mr-4 md:mr-10 w-40 sm:w-24" />
              <div>
                <h2 className="text-2xl font-semibold mb-2">Headline</h2>
                <p className="sm:w-10/12 md:w-8/12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Interdum porta magna at blandit a.
                </p>
              </div>
            </li>
            <li className="flex items-start mb-12">
              <FeatureIcon1 className="mr-4 md:mr-10 w-40 sm:w-24" />
              <div>
                <h2 className="text-2xl font-semibold mb-2">Headline</h2>
                <p className="sm:w-10/12 md:w-8/12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Interdum porta magna at blandit a.
                </p>
              </div>
            </li>{" "}
            <li className="flex items-start mb-12">
              <FeatureIcon2 className="mr-4 md:mr-10 w-40 sm:w-24" />
              <div>
                <h2 className="text-2xl font-semibold mb-2">Headline</h2>
                <p className="sm:w-10/12 md:w-8/12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Interdum porta magna at blandit a.
                </p>
              </div>
            </li>{" "}
            <li className="flex items-start">
              <FeatureIcon3 className="mr-4 md:mr-10 w-40 sm:w-24" />
              <div>
                <h2 className="text-2xl font-semibold mb-2">Headline</h2>
                <p className="sm:w-10/12 md:w-8/12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Interdum porta magna at blandit a.
                </p>
              </div>
            </li>
          </ul>
        </article>
        <figure className="flex  justify-center items-center row-start-1 md:row-auto">
          <StaticImage
            src="../images/Phone-Mockup.png"
            width={550}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Phone Mockup"
          />
        </figure>
      </div>
    </section>
  )
}
