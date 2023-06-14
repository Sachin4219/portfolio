import React from 'react'
import {SectionWrapper} from "../HigherOrder"
import {BallCanvas} from "./canvas"
import {technologies} from "../constants"

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {
        technologies.map((tech,index)=>{
          return (
            <div className='w-28 h-28' key={tech.name}>
              <BallCanvas key={index} icon = {tech.icon}/>
            </div>
          )
        })
      }

    </div>
  )
}

export default SectionWrapper(Tech,"")