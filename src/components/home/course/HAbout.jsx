import React from "react"
import OnlineCourses from "./OnlineCourses"
// import Heading from "../common/heading/Heading"
import "./courses.css"
// import { awrapper } from "../../dummydata"
import Awrapper from "../about/Awrapper"

const HAbout = () => {
  return (
    <>

    <Awrapper/>
      <section className='homeAbout'>
        <OnlineCourses />
      </section>
    </>
  )
}

export default HAbout
