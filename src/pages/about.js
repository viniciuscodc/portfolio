import * as React from "react"
import './../style/about.scss'
import Navigation from './../templates/navigation'
import Social from "./../templates/social"
import { Helmet } from 'react-helmet'

export default function AboutPage() {
  return (
    <main>   
    <Navigation/>
    <Helmet title='About' bodyAttributes={{ class: 'about-page' }} />
    <Social />
    </main>
    
  )
}

