import * as React from "react"
//import {Link} from "gatsby";
import './../style/contact.scss'
import Navigation from './../templates/navigation'
import Social from "./../templates/social"
import { Helmet } from 'react-helmet'


// data

// markup
const ContactPage = () => {
  return (
    <main>   
    <Navigation/>
    <Helmet title='Contact' bodyAttributes={{ class: 'contact-page' }} />
    <Social />
    </main>
    
  )
}

export default ContactPage
