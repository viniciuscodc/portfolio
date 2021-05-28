import * as React from "react"
import { FaAdobe } from 'react-icons/fa';
import '../style/projects.scss';
import Navigation from './../templates/navigation'
import Social from "./../templates/social"
import { Helmet } from 'react-helmet'

const ProjectPage = () => {
    return(
      <main>   
      <Navigation/>
      <Helmet title='Projects' bodyAttributes={{ class: 'projects-page' }} />
      <Social />
      </main>
    )
}

export default ProjectPage;