import * as React from "react"
//import {Link} from "gatsby";
import './../style/about.scss'
import Navigation from './../templates/navigation'
import Social from "./../templates/social"
import { Helmet } from 'react-helmet'


// data

// markup
const AboutPage = () => {
  return (
    <main>   
    <Navigation/>
    <Helmet title='About' bodyAttributes={{ class: 'about-page' }} />
    <Social />
    </main>
    
  )
}

export default AboutPage
