import React from 'react'
import Hero from '../../components/Hero'
import Products from '../Products'
import {Helmet} from "react-helmet";

function Home() {
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Hero/>
    <Products/>
    
    </>
    
  )
}

export default Home